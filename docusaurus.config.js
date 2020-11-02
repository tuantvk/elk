module.exports = {
  title: 'Elk',
  tagline: 'Documents for React Native testing',
  url: 'https://elk.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'tuantvk',
  projectName: 'elk',
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Elk',
      logo: {
        alt: 'Elk Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/tuantvk/elk',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      logo: { src: 'img/logo.svg', alt: 'Build Tracker' },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs',
            },
            {
              label: 'Testing',
              to: 'docs/testing',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Author Blog',
              href: 'http://tuantvk.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tuantvk',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} tuantvk, built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'jsx',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
