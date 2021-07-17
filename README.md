# Repo Ranker CLI
**Description**

A CLI tool to fetch trending GitHub repositories with a security score notation. As for v1.00, the CLI fetches weekly trending JavaScript repositories and the next version is planned to allow more flexibility to fetch more types of repositories.

**Installation & Usage**
 - prerequisite:
   - NodeJS version => v14.00
   - dependency-check package (run: `npm install dependency-check -g`)
 - clone this repo
 - cd to the repo folder
 - run:
 
       npm install
       
       node cli.js <max-repo-to-fetch>
      
 - check the output

**CLI Output Description**

The CLI output contains the fetched trending repositories formatted in JSON and contains various general fields and a security score field:
- **securityScore** : Total unused packages of the current repo
- **unusedPackages** : List all of the unused packages for the current repo

  
 **Usage Exmaple:**

    $ node cli.js 5
    Trending Repos CLI v1.0
    -----------------------
    Fetching trending repos..
    
    Top 5 Trending Repositories:
    {
      author: '30-seconds',
      name: '30-seconds-of-code',
      href: 'https://github.com/30-seconds/30-seconds-of-code',
      description: 'Short JavaScript code snippets for all your development needs',
      language: 'JavaScript',
      stars: 80936,
      forks: 8652,
      starsInPeriod: 1772,
      securityScore: 0
    }
    {
      author: 'airbnb',
      name: 'javascript',
      href: 'https://github.com/airbnb/javascript',
      description: 'JavaScript Style Guide',
      language: 'JavaScript',
      stars: 111953,
      forks: 21446,
      starsInPeriod: 1172,
      securityScore: 0
    }
    {
      author: 'jaywcjlove',
      name: 'awesome-mac',
      href: 'https://github.com/jaywcjlove/awesome-mac',
      description: ' Now we have become very big, Different from the original idea. Collect premium software in various categories.',
      language: 'JavaScript',
      stars: 43916,
      forks: 4834,
      starsInPeriod: 1389,
      securityScore: 0
    }
    {
      author: 'trekhleb',
      name: 'javascript-algorithms',
      href: 'https://github.com/trekhleb/javascript-algorithms',
      description: '📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings',
      language: 'JavaScript',
      stars: 114415,
      forks: 18820,
      starsInPeriod: 1980,
      securityScore: 12
    }
    {
      author: 'philc',
      name: 'vimium',
      href: 'https://github.com/philc/vimium',
      description: "The hacker's browser.",
      language: 'JavaScript',
      stars: 16106,
      forks: 1933,
      starsInPeriod: 320,
      securityScore: 1
    }
