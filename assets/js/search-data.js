// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-became-the-general-secretary-for-ieee-oau",
          title: 'Became the General Secretary for IEEE-OAU',
          description: "",
          section: "News",},{id: "news-won-1st-place-winner-spe-oau-energy-hackathon-link",
          title: 'Won 1st Place Winner SPE-OAU Energy Hackathon - Link',
          description: "",
          section: "News",},{id: "news-got-accepted-for-google-summer-of-code-2023",
          title: 'Got accepted for Google Summer of Code 2023',
          description: "",
          section: "News",},{id: "news-won-best-poster-award-for-my-gsoc-23-work-at-dsn-ai-bootcamp-2023-poster-award",
          title: 'Won Best Poster Award for my GSoC’23 work at DSN-AI Bootcamp 2023.Poster, Award...',
          description: "",
          section: "News",},{id: "news-i-successfully-completed-google-summer-of-code-2023",
          title: 'I successfully completed Google Summer of Code 2023',
          description: "",
          section: "News",},{id: "news-i-won-poster-award-for-my-gsoc-23-work-at-deep-learning-indaba-2023",
          title: 'I won poster award for my GSoC’23 work at Deep Learning Indaba 2023...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-on-lanfrica-talks-about-my-google-summer-of-code-2023-project-link",
          title: 'Gave a talk on Lanfrica Talks about my Google Summer of Code 2023...',
          description: "",
          section: "News",},{id: "news-won-first-place-in-the-robomua-hackathon-post",
          title: 'Won first place in the roboMUA hackathon. Post',
          description: "",
          section: "News",},{id: "news-i-became-the-women-in-engineering-lead-for-the-wie-branch-of-ieee-oau",
          title: 'I became the Women In Engineering Lead for the WIE branch of IEEE-OAU...',
          description: "",
          section: "News",},{id: "news-got-accepted-for-google-summer-of-code-2024",
          title: 'Got accepted for Google Summer of Code 2024',
          description: "",
          section: "News",},{id: "news-i-started-working-at-cytoscape-consortium-as-a-machine-learning-consultant-for-my-google-summer-of-code-2024-project",
          title: 'I started working at Cytoscape Consortium as a Machine Learning Consultant for my...',
          description: "",
          section: "News",},{id: "news-i-successfully-completed-google-summer-of-code-2024",
          title: 'I successfully completed Google Summer of Code 2024',
          description: "",
          section: "News",},{id: "news-i-graduated-from-university-with-a-second-class-upper",
          title: 'I graduated from university with a Second Class(Upper)',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%76%6F%75%72.%75%6A%61%6D%65%73%31%39%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Favour James", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/https://orcid.org/0009-0005-9299-2442", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oZzLBLYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
