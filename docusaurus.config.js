/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Short.io JS',
  tagline: 'NodeJS wrapper for the <a href="https://short.io" target="_blank">short.io</a> API',
  url: 'https://shortio.ichiidev.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ichiidev', // Usually your GitHub org/user name.
  projectName: 'short.io-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Short.io JS',
      logo: {
        alt: 'Short.io JS logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/IchiiDev/short.io',
          label: 'GitHub Repo',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Information & Links',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub Repo',
              href: 'https://github.com/IchiiDev/short.io',
            },
            {
              label: 'Documentation Repository',
              href: "https://github.com/IchiiDev/short.io-docs/"
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IchiiDev built with Docusaurus.<br/>The package short.io is not endorsed nor maintained by the short.io company`,
    },
    colorMode: {
      defaultMode: "dark"
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
