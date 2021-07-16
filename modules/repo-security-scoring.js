import tmp from 'tmp-promise';
import git from 'git-clone-promise';
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
            await git(repo.href, repoPath);
            repo.absolutePath = repoPath;
        }
        
        for (const repo of reposToScore) {
            const unusedPackages = await getUnusedPackages(repo.absolutePath);
            repo.securityScore = unusedPackages;
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

async function getUnusedPackages(repoPath) {
    try {
        const { _, stderr } = await exec_promise('dependency-check ./package.json ./*.js --unused --ignore', { cwd: repoPath });
        if (stderr && stderr.includes('Fail!')) {
            return stderr.split('code:')[1].split(',').length;
        }
    }
    catch (err) {
        return 0;
    }

    return 0;
}

function createLocalReposDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
}

//deletion
//parallel
//map
//args utils
//docker image
//rest api
//CSAT