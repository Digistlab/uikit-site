


const gettingStarted = {

    "Introduction": "introduction",
    "Installation": "installation",
    "Less": "less",
    "Sass": "sass",
    "JavaScript": "javascript",
    "Webpack": "webpack",
    "Custom icons": "custom-icons",
    "Avoiding conflicts": "avoiding-conflicts",
    "RTL support": "rtl",
    "Migration": "migration"

};

const sidebar = [
  {
    title: "Introduction",
    children: Object.keys(gettingStarted).map(name => {
      const value = gettingStarted[name];
        return [`/doc/${value}.md`, name];
    })
  },
];

export default {

    dest: '/Applications/MAMP/htdocs/dist',

    title: 'UIkit',
    description: 'UIkit site',
    editLinks: false,
    themeConfig: {
      repo: 'uikit/uikit',
      routes: {
        download: '/download'
      },
      nav: [
        // { text: 'test', link: '/test'},
        { text: 'pro', link: '/pro'},
        { text: 'documentation', link: '/documentation' },
        { text: 'changelog', link: '/changelog' },
      ],
      sidebar: {
        '/api/': sidebar,
        '/doc/': sidebar
      },

    }
  }