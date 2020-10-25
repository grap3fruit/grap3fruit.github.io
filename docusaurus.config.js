module.exports = {
  title: "Grap3fruit's Blog",
  tagline: '이것저것 채워 넣고 있습니다.😀',
  url: 'https://grap3fruit.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'grap3fruit', // Usually your GitHub org/user name.
  projectName: 'grap3fruit', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Grap3fruit',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/grap3fruit/grap3fruit.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Infomation',
          items: [
            {
              label: 'About',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/grap3fruit/grap3fruit.github.io',
            },
          ],
        },
        {
          title: 'Category',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
          ],
        },
      ],
      copyright: `Copyright © Grap3fruit. Built with Docusaurus.`,
    },
    hideableSidebar: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/grap3fruit/grap3fruit.github.io',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/grap3fruit/grap3fruit.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
