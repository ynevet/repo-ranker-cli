import express from 'express';
import scoreRepos from './modules/repo-security-scorer/index.js';
import getTrending from './modules/trending-repos/index.js';
const PORT = process.env.PORT || 8080;
const app = express()

app.get('/api/trending-repos', getRoute)

async function getRoute (req, res) {
    try {
        let max = req.query.max || 10;
        const repos = await getTrending(max, 'weekly', 'javascript');
        const scoredRepos = await scoreRepos(repos);
        res.json(scoredRepos)
    } catch (error) {
        console.error(error);
        res.status(500).send(`API ERROR: An error occurred while retrieving and processing repos`)
    }
}

app.listen(PORT);
console.log(`App listening on http://localhost:${PORT}/`)