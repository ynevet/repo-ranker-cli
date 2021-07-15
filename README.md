# Repo Ranker CLI
**Description:**
A CLI tool to fetch trednding GitHub repositories with a secirity score.
As for v1.00, the CLI fetches weekly trending JavaScript repositories and next version would allow more flexability to fetch more type of repositories.

**Installation & Usage**

 - clone this repo
 - cd to the repo folder
 - run: node cli.js <max-repo-to-fetch>
 - check the output

**CLI Output Description**

The CLI output contains the fetched trending repositories formatted in JSON format and contains various general fields and a security score field:
- **securityScore** : indicates about the current repo security state in terms of total unused packages

  
 **Usage Exmaple:**

    $ node cli.js 5
    Trending Repos CLI v1.0
    -----------------------
    Fetching trending repos..
    
    Top 5 Trending Repositories:
    {
      author: 'philc',
      name: 'vimium',
      href: 'https://github.com/philc/vimium',
      description: "The hacker's browser.",
      language: 'JavaScript',
      stars: 16103,
      forks: 1933,
      starsInPeriod: 320,
      absolutePath: '/Users/ynevet/my-projects/repo-ranker/tmp-15860-a5JjGxR424pf/vimium',
      securityScore: 0
    }
    {
      author: 'airbnb',
      name: 'javascript',
      href: 'https://github.com/airbnb/javascript',
      description: 'JavaScript Style Guide',
      language: 'JavaScript',
      stars: 111948,
      forks: 21444,
      starsInPeriod: 1173,
      absolutePath: '/Users/ynevet/my-projects/repo-ranker/tmp-15860-a5JjGxR424pf/javascript',
      securityScore: 0
    }
    {
      author: 'trekhleb',
      name: 'javascript-algorithms',
      href: 'https://github.com/trekhleb/javascript-algorithms',
      description: '📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings',
      language: 'JavaScript',
      stars: 114395,
      forks: 18812,
      starsInPeriod: 1975,
      absolutePath: '/Users/ynevet/my-projects/repo-ranker/tmp-15860-a5JjGxR424pf/javascript-algorithms',
      securityScore: 0
    }
    {
      author: '30-seconds',
      name: '30-seconds-of-code',
      href: 'https://github.com/30-seconds/30-seconds-of-code',
      description: 'Short JavaScript code snippets for all your development needs',
      language: 'JavaScript',
      stars: 80917,
      forks: 8647,
      starsInPeriod: 1767,
      absolutePath: '/Users/ynevet/my-projects/repo-ranker/tmp-15860-a5JjGxR424pf/30-seconds-of-code',
      securityScore: 0
    }
    {
      author: 'jaywcjlove',
      name: 'awesome-mac',
      href: 'https://github.com/jaywcjlove/awesome-mac',
      description: ' Now we have become very big, Different from the original idea. Collect premium software in various categories.',
      language: 'JavaScript',
      stars: 43807,
      forks: 4834,
      starsInPeriod: 1282,
      absolutePath: '/Users/ynevet/my-projects/repo-ranker/tmp-15860-a5JjGxR424pf/awesome-mac',
      securityScore: 0
    }
