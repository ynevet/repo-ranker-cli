# Trending Repos Security Ranker CLI
**Description**

A CLI tool to fetch trending GitHub repositories with a security score notation. As for v1.00, the CLI fetches weekly trending JavaScript repositories and the next version is planned to allow more flexibility to fetch more types of repositories.

**How it works?**

When executed, the CLI grabs the top GitHub's trending repos and calculats their security score by evaluating various security data points. 

**Installation & Usage**
 - Prerequisite:
   - NodeJS version => v14.00
   - dependency-check package (run: `npm install dependency-check -g`)
 - `$ git clone https://github.com/ynevet/repo-ranker-cli.git`
 - `$ cd repo-ranker-cli`
 - `$ npm install`
 - `$ node cli.js <max-repos-to-fetch>`
 - check the CLI output

**Running as a Docker Container**
 - Prerequisite:
   - Docker Desktop / Engine
 -   `$ cd repo-ranker-cli`
 -   Build: `$ docker build -t repo-ranker-cli .`
 -   Run & Usage Example: `$ docker run repo-ranker-cli:latest 5`

**Serve as REST API**
-   `$ cd repo-ranker-cli`
-   `$ node server.js`
-   Go to: `http://localhost:8080/api/trending-repos?max=5`
-   Enjoy the results

**CLI Output Description**

The CLI output contains the fetched trending repositories formatted in JSON, contains various general repo details fields **including various security fields**:
- **securityScore**: Based on the total unused packages of the current repo
- **unusedPackages**: List all of the unused packages for the current repo

  
 **Usage Exmaple:**
```console
$ node cli.js 5 
Trending Repos CLI v1.0
***********************
Fetching trending repos..

Top 5 Trending Repositories:
[
  {
    author: 'shufflewzc',
    name: 'faker2',
    href: 'https://github.com/shufflewzc/faker2',
    description: '不知名大佬备份',
    language: 'JavaScript',
    stars: 527,
    forks: 232,
    starsInPeriod: 295,
    unusedPackages: [
      'http-server',
      'qrcode-terminal\nFail! Dependencies not listed in package.json: png-js',
      'canvas',
      'push'
    ],
    securityScore: 4
  },
  {
    author: 'trekhleb',
    name: 'javascript-algorithms',
    href: 'https://github.com/trekhleb/javascript-algorithms',
    description: '📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings',
    language: 'JavaScript',
    stars: 114668,
    forks: 18885,
    starsInPeriod: 1410,
    unusedPackages: [
      '@babel/cli',
      '@babel/preset-env',
      '@types/jest',
      'canvas',
      'eslint',
      'eslint-config-airbnb',
      'eslint-plugin-import',
      'eslint-plugin-jest',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'husky',
      'jest'
    ],
    securityScore: 12
  },
  {
    author: 'airbnb',
    name: 'javascript',
    href: 'https://github.com/airbnb/javascript',
    description: 'JavaScript Style Guide',
    language: 'JavaScript',
    stars: 112079,
    forks: 21490,
    starsInPeriod: 655,
    unusedPackages: [],
    securityScore: 0
  },
  {
    author: '30-seconds',
    name: '30-seconds-of-code',
    href: 'https://github.com/30-seconds/30-seconds-of-code',
    description: 'Short JavaScript code snippets for all your development needs',
    language: 'JavaScript',
    stars: 81084,
    forks: 8676,
    starsInPeriod: 1313,
    unusedPackages: [],
    securityScore: 0
  },
  {
    author: 'philc',
    name: 'vimium',
    href: 'https://github.com/philc/vimium',
    description: "The hacker's browser.",
    language: 'JavaScript',
    stars: 16134,
    forks: 1937,
    starsInPeriod: 61,
    unusedPackages: [],
    securityScore: 0
  }
]
```
