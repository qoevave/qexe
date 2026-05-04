// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QExE Tool',
  tagline: 'DFG SPP 2236 Audictive, Proj. No. 444832250',
  favicon: 'img/logo_icon_white.ico',

  // Set the production url of your site here
  url: 'https://qoevave.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/qexe/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qoevave', // Usually your GitHub org/user name.
  projectName: 'qexe', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      './plugins/qoevave-publications',
      {bibFile: 'static/data/QExE_pubs.bib'},
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/MaxUnityInterfaces.png',
      algolia:{
        appId: 'AO2JRUV5OE',
        apiKey: '3c5bc1ecc63c7952b7ee450aa5a26da5',
        indexName: 'QExE crawl',
      },
      navbar: {
        title: 'QExE Tool',
        logo: {
          alt: 'QExE Tool',
          src: 'img/logo_icon_white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/publications',
            label: 'Publications',
            position: 'left',
          },
          {
            href: 'https://qoevave.github.io',
            label: 'Parent Project',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'development',
        content:
          'This documentation is made accessible for review purposes and is still under development.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'Audictive Priority Program',
                href: 'http://www.spp2236-audictive.de/Abstracts/Abstract-11.html',
              },
              {
                label: 'Funding',
                href: 'https://www.dfg.de/en/funded_projects/current_projects_programmes/list/projectdetails/index.jsp?id=422686707&sort=nr_asc&prg=SPP&wb=4',
              },
            ],
          },
          {
            title: 'Partners',
            items: [
              {
                label: 'International Audio Labs Erlangen',
                href: 'https://www.audiolabs-erlangen.de/fau',
              },
              {
                label: 'AV Technology Group TU-Ilmenau',
                href: 'https://www.tu-ilmenau.de/en/university/departments/department-of-electrical-engineering-and-information-technology/profile/institutes-and-groups/audiovisual-technology-group',
              },
            ],
          },
        ],
        logo: {
          alt: 'DFG',
          src: 'img/dfg_logo_schriftzug_weiss.png',
          href: 'https://www.dfg.de/en/funded_projects/current_projects_programmes/list/projectdetails/index.jsp?id=422686707&sort=nr_asc&prg=SPP&wb=4',
          width: 230,
          height: 30,
        },
        copyright: `Copyright © ${new Date().getFullYear()} QoEVAVE`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['R', "JSON"],
      },
    }),
};

export default config;
