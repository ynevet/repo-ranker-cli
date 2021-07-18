# Repo Ranker CLI
**Description**

A CLI tool to fetch trending GitHub repositories with a security score notation. As for v1.00, the CLI fetches weekly trending JavaScript repositories and the next version is planned to allow more flexibility to fetch more types of repositories.

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
 -   Run & Usage Example: `docker run repo-ranker-cli:latest 5`

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
    author: '30-seconds',
    name: '30-seconds-of-code',
    href: 'https://github.com/30-seconds/30-seconds-of-code',
    description: 'Short JavaScript code snippets for all your development needs',
    language: 'JavaScript',
    stars: 80999,
    forks: 8665,
    starsInPeriod: 1768,
    unusedPackages: [],
    securityScore: 0
  },
  {
    author: 'trekhleb',
    name: 'javascript-algorithms',
    href: 'https://github.com/trekhleb/javascript-algorithms',
    description: '📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings',
    language: 'JavaScript',
    stars: 114528,
    forks: 18849,
    starsInPeriod: 1976,
    unusedPackages: [
      ' @babel/cli',
      ' @babel/preset-env',
      ' @types/jest',
      ' canvas',
      ' eslint',
      ' eslint-config-airbnb',
      ' eslint-plugin-import',
      ' eslint-plugin-jest',
      ' eslint-plugin-jsx-a11y',
      ' eslint-plugin-react',
      ' husky',
      ' jest\n'
    ],
    securityScore: 12
  },
  {
    author: 'zero205',
    name: 'JD_tencent_scf',
    href: 'https://github.com/zero205/JD_tencent_scf',
    description: '京东腾讯云函数版，低调使用，不要fork！！',
    language: 'JavaScript',
    stars: 523,
    forks: 162,
    starsInPeriod: 102,
    unusedPackages: [
      ' http-server\nFail! Dependencies not listed in package.json: push',
      ' canvas',
      ' tencentcloud-sdk-nodejs',
      ' js-yaml\n'
    ],
    securityScore: 4
  },
  {
    author: 'airbnb',
    name: 'javascript',
    href: 'https://github.com/airbnb/javascript',
    description: 'JavaScript Style Guide',
    language: 'JavaScript',
    stars: 111987,
    forks: 21464,
    starsInPeriod: 1119,
    unusedPackages: [],
    securityScore: 0
  },
  {
    author: 'philc',
    name: 'vimium',
    href: 'https://github.com/philc/vimium',
    description: "The hacker's browser.",
    language: 'JavaScript',
    stars: 16117,
    forks: 1938,
    starsInPeriod: 328,
    unusedPackages: [],
    securityScore: 0
  }
]
```
