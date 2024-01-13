import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MCNi360',
  tagline: 'Integrated Mobile Sales',
  favicon: 'img/mcni360_logo_blue.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MCNi360', // Usually your GitHub org/user name.
  projectName: 'MCNI360 Documentation', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/mcni360_logo_blue.png',
    navbar: {
      title: 'MCNi360',
      logo: {
        alt: 'MCNi360 Logo',
        src: 'img/mcni360_logo_blue.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: 'docs/faqs', label: 'FAQs', position: 'left'},
        {
          href: 'https://mcni360.us/',
          label: 'MCNi360',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Intro',
              to: '/docs/intro',
            },
            {
              label: 'MCNi Platform',
              href: '/docs/mcni-platform',            
            },
            {
              label: 'MCNiGo CLient App',
              href: '/docs/mcnigo-client-app',            
            },
            {
              label: 'Mobile Sales',
              href: '/docs/mobile-sales',            
            },
            {
              label: 'Resources',
              href: '/docs/resources',            
            }
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'MCNi360',
              href: 'https://mcni360.us/',
            },
            {
              label: 'Contact Us',
              href: 'https://mcni360.us/contact-us/',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'FAQs',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MCNi360, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
