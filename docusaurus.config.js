// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reservoir',
  tagline: 'NFT aggregator',
  url: 'https://reservoirprotocol.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/reservoir.png',
  organizationName: 'UnevenLabs', // Usually your GitHub org/user name.
  projectName: 'reservoir-docs', // Usually your repo name.

  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local'),
    // require.resolve('docusaurus-tailwindcss'),
    'docusaurus-tailwindcss',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'using-spec-url',
            specUrl: 'https://reservoir-metadata.vercel.app/api/yaml',
            routePath: '/api-reference/',
          },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reservoir',
        logo: {
          alt: 'Reservoir Logo',
          src: 'img/reservoir.svg',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Tutorial',
            position: 'left',
            className: 'persistent',
          },
          {
            to: '/docs/core-components/API/overview',
            label: 'API',
            position: 'left',
            className: 'persistent',
          },
          {
            to: '/docs/core-components/SDK/overview',
            label: 'SDK',
            position: 'left',
            className: 'persistent',
          },
          // {
          //   to: "/sdk/introduction",
          //   label: "SDK",
          //   position: "left",
          //   className: "persistent",
          // },
          // {
          //   to: "/protocol/reference/smart-contracts",
          //   label: "Contracts",
          //   position: "left",
          //   className: "persistent",
          // },
          // {
          //   to: "/sdk/subgraph/subgraph-data",
          //   label: "API",
          //   position: "left",
          //   className: "persistent",
          // },
          // {
          //   to: "/protocol/concepts/governance/overview",
          //   label: "Governance",
          //   position: "left",
          //   className: "persistent",
          // },
          {
            href: 'https://github.com/reservoirprotocol/reservoir-docs',
            label: 'GitHub',
            position: 'right',
            className: 'persistent',
          },
          // {
          //   type: "localeDropdown",

          //   //// Optional
          //   position: "right",
          //   // Add additional dropdown items at the beginning/end of the dropdown.
          //   dropdownItemsBefore: [],
          //   dropdownItemsAfter: [
          //     {
          //       to: "https://my-site.com/help-us-translate",
          //       label: "Help us translate",
          //     },
          //   ],
          // },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Docs',
                href: '#',
              },
              {
                label: 'Github',
                href: '#',
              },
            ],
          },
          {
            title: 'Built on Reservoir',
            items: [
              {
                label: 'Levee',
                href: '#',
              },
              {
                label: 'Loot Exchange',
                href: '#',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Twitter',
                href: '#',
              },
              {
                label: 'Blog',
                href: '#',
              },
            ],
          },
        ],
        // copyright: `unlicensed`,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: true,

        // Dark/light switch icon options
        switchConfig: {
          // Icon for the switch while in dark mode
          darkIcon: '\u{263D}',

          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '\u{263C}',
        },
      },
      prism: {
        additionalLanguages: ['solidity'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
