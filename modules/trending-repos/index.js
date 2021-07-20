import trending from 'trending-github';

export default async function getTrending(max, period, language) {
    let trendingRepos = await trending(period, language);
    return (trendingRepos.length <= max ? trendingRepos : trendingRepos.slice(0, max));
}