#!/usr/bin/env node

import scoreRepos from './modules/repo-security-scorer/index.js';
import getTrending from './modules/trending-repos/index.js';

printWelcomeMessage();
const maxReposToFetch = validateAndGetArg();
await processReposAndPrintResults(maxReposToFetch);

async function processReposAndPrintResults(maxReposToFetch) {
    console.log('Fetching trending repos..');

    let trendingRepos = [];
    try {
        trendingRepos = await getTrending(maxReposToFetch, 'weekly', 'javascript');
    }
    catch (err) {
        console.error('Failed to fetch trending repos.', err);
        process.exit(1);
    }

    if (trendingRepos.length == 0) {
        console.info('No trending repos found');
        process.exit(0);
    }
    const results = await scoreRepos(trendingRepos);
    console.log(`\nTop ${results.length} Trending Repositories:`);
    console.log(results);
}

function printWelcomeMessage() {
    console.log('Trending Repos CLI v1.0');
    console.log('***********************');
}

function validateAndGetArg() {
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