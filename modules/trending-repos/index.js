import trending from 'trending-github';

export default async function getTrending(max, period, language) {
    let trendingRepos = [];
    try {
        trendingRepos = await trending(period, language);
    }
    catch (err) {
        throw Error('Failed to fetch trending repos.', err);
    }
    return (trendingRepos.length <= max ? trendingRepos : trendingRepos.slice(0, max));
}