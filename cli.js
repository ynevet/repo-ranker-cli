import trending from 'trending-github';
import tmp from 'tmp-promise';
import git from 'git-clone-promise';
import { exec } from 'child_process';
import rimraf from 'rimraf';
import fs from 'fs';
import path from 'path';

console.log('Trending Repos CLI v1.0')
console.log('-----------------------')

const maxReposToFetch = readAndValidateArgs();

const tmpDirectory = await createTempReposDir();

console.log('Fetching trending repos..')
let trendingRepos = [];
try {
    trendingRepos = await trending('weekly', 'javascript');
}
catch (err) {
    console.error('Failed to fetch trending repos.', err);
    process.exit(1)
}

if (trendingRepos.length == 0) {
    console.info('No trending repos found');
    process.exit(0);
}

const topRepos = trendingRepos.length <= maxReposToFetch ? trendingRepos : trendingRepos.slice(0, maxReposToFetch);

for (const repo of topRepos) {
    const repoPath = `${tmpDirectory.path}/${repo.name}`;
    try {
        await git(repo.href, repoPath);
        repo.absolutePath = repoPath;
    }
    catch (err) {
        console.error(`Failed to clone a repo[${repo.name}]. Message: `, err.message)
        process.exit(1)
    }
}

console.log(`\nTop ${maxReposToFetch} Trending Repositories:`);
for (const repo of topRepos) {
    getUnusedPackages((error, stdout, stderror) => {
        if (stderror && stderror.includes('Fail!')) {
            repo.securityScore = stderror.split('code:')[1].split(',').length;
            console.log(repo);
        }
        else {
            repo.securityScore = 0;
            console.log(repo);
        }
        rimraf(repo.absolutePath, function () { /*console.log('remove folder', repo.absolutePath)*/ });
    }, repo.absolutePath);
}

async function createTempReposDir() {
    const dir = './tmp_repos';
    createLocalReposDir(dir);
    const tmpDirectory = await tmp.dir({ 'tmpdir': path.join(process.cwd(), dir) });
    return tmpDirectory;
}

function getUnusedPackages(callback, repoPath) {
    execute("dependency-check ./package.json ./*.js --unused", repoPath, function (error, stdout, stderr) {
        callback(error, stdout, stderr);
    });
};

function readAndValidateArgs() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.error('Please supply the max repositories to fetch argument (e.g. node cli.js 5)');
        process.exit(1);
    }

    const maxReposToFetch = args[0];

    if (maxReposToFetch < 1 || isNaN(maxReposToFetch)) {
        console.error('max arg value should be a number greater than 0');
        process.exit(1);
    }
    return maxReposToFetch;
}

function createLocalReposDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(didirPathr);
    }
}

function execute(command, cwdPath, callback) {
    exec(command, { cwd: cwdPath }, function (error, stdout, stderr) { callback(error, stdout, stderr); });
};