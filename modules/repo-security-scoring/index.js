import tmp from 'tmp-promise';
import gitClone from 'git-clone-promise';
import { exec } from 'child_process';
import del from 'del';
import fs from 'fs';
import path from 'path';
import util from 'util';
const exec_promise = util.promisify(exec);

export default async function getScoredRepos(reposToScore) {
    if (reposToScore && reposToScore.length > 0) {
        const tempReposDir = './tmp_repos';
        const tmpDirectory = await createTempReposDir(tempReposDir);

        const scoredRepos = [];
        for (const repo of reposToScore) {
            const repoPath = `${tmpDirectory.path}/${repo.name}`;
            await gitClone(repo.href, repoPath);
            repo.unusedPackages = await getRepoUnusedPackages(repoPath);
            repo.securityScore = repo.unusedPackages.length;
            scoredRepos.push(repo);
        }
        await del(tempReposDir);
        return scoredRepos;
    }

    throw Error('reposToScore parameter should not be null or empty');
};

async function createTempReposDir(dir) {
    createLocalReposDir(dir);
    const tmpDirectory = await tmp.dir({ 'tmpdir': path.join(process.cwd(), dir) });
    return tmpDirectory;
}

export async function getRepoUnusedPackages(repoPath) {
    try {
        const { _, stderr } = await exec_promise('dependency-check ./package.json ./*.js --unused --ignore', { cwd: repoPath });
        if (stderr && stderr.includes('Fail!')) {
            return stderr.split('code:')[1].split(',');
        }
    }
    catch (err) {
        return [];
    }

    return [];
}

function createLocalReposDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

//parallel
//map
//args utils
//rest api
//CSAT