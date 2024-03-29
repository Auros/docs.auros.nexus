import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Auros Nexus',
  tagline: 'Software documentation at its finest.',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.auros.nexus',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Auros Nexus',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'vrchatSidebar',
          position: 'left',
          label: 'VRChat',
        },
        {
          href: 'https://github.com/Auros',
          label: 'GitHub',
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
              label: 'VRChat',
              to: '/vrchat/intro',
            }
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/auros.nexus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/AurosVR',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Auros',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Auros Nexus. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
