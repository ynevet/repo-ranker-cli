import tmp from 'tmp-promise';
import gitClone from 'git-clone-promise';
import { exec } from 'child_process';
import del from 'del';
import fs from 'fs';
import path from 'path';
import util from 'util';
const tempReposDir = './tmp_repos';
const exec_promise = util.promisify(exec);

export default async function scoreRepos(reposToScore) {
    if (reposToScore && reposToScore.length > 0) {
        await del(tempReposDir);
        const tmpDirectory = await createTempReposDir(tempReposDir);

        const results = await Promise.allSettled(reposToScore.map(async (repo) => {
            const repoPath = `${tmpDirectory.path}/${repo.name}`;
            await gitClone(repo.href, repoPath);
            repo.unusedPackages = await getRepoUnusedPackages(repoPath);
            repo.securityScore = repo.unusedPackages.length;
            return repo;
        }));

        return results.filter(i => i.status === 'fulfilled').map(i => i.value);
    }

    throw Error('reposToScore parameter should not be null or empty');
};

export async function getRepoUnusedPackages(repoPath) {
    try {
        const { _, stderr } = await exec_promise('dependency-check ./package.json ./**/*.js --unused --ignore', { cwd: repoPath });
        if (stderr && stderr.includes('Fail!')) {
            return stderr.split('code:')[1].split(',').map(i => i.trim().split('\n')[0]);
        }

        return [];
    }
    catch (err) {
        return [];
    }
}

async function createTempReposDir(dir) {
    createLocalReposDir(dir);
    const tmpDirectory = await tmp.dir({ 'tmpdir': path.join(process.cwd(), dir) });
    return tmpDirectory;
}

function createLocalReposDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}