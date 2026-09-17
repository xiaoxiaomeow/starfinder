// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Starfinder百科',
	favicon: 'img/Desna.png',

	// Set the production url of your site here
	url: 'https://xiaoxiaomeow.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/starfinder',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'xiaoxiaomeow', // Usually your GitHub org/user name.
	projectName: 'starfinder', // Usually your repo name.

	trailingSlash: false, // as suggested by Github Pages Tutorial
	customFields: {
		// Put your custom environment here
		GIT_USER: "xiaoxiaomeow"
	},

	onBrokenLinks: 'throw',
	markdown: {
		hooks: {
			onBrokenMarkdownLinks: 'warn'
		}
	},

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'zh-Hans',
		locales: ['zh-Hans']
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					//   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			})
		]
	],

	plugins: [
		function cleanStaticHtml() {
			return {
				name: 'clean-static-html',
				async postBuild({ outDir }) {
					// React 18 streaming SSR can insert NULs into Chinese text and heading IDs.
					// https://github.com/facebook/react/issues/31134
					const files = await readdir(outDir, { recursive: true });
					await Promise.all(files.filter(filename => filename.endsWith('.html')).map(async filename => {
						const filePath = path.join(outDir, filename);
						const html = await readFile(filePath, 'utf8');
						if (html.includes('\u0000')) {
							await writeFile(filePath, html.replace(/\u0000/g, ''), 'utf8');
						}
					}));
				}
			};
		},
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'core_rulebook',
				path: 'core_rulebook',
				routeBasePath: 'core_rulebook',
				sidebarPath: require.resolve('./sidebars/sidebar_auto.js'),
				admonitions: {
					keywords: ['note', 'tip', 'info', 'warning', 'danger', 'starfinder', 'origin', 'vanilla', 'pencil', 'table', 'progress'],
					extendDefaults: true
				}
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'themes',
				path: 'themes',
				routeBasePath: 'themes',
				sidebarPath: require.resolve('./sidebars/sidebar_auto.js'),
				admonitions: {
					keywords: ['note', 'tip', 'info', 'warning', 'danger', 'starfinder', 'origin', 'vanilla', 'pencil', 'table', 'progress'],
					extendDefaults: true
				}
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'races',
				path: 'races',
				routeBasePath: 'races',
				sidebarPath: require.resolve('./sidebars/sidebar_auto.js'),
				admonitions: {
					keywords: ['note', 'tip', 'info', 'warning', 'danger', 'starfinder', 'origin', 'vanilla', 'pencil', 'table', 'progress'],
					extendDefaults: true
				}
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'classes',
				path: 'classes',
				routeBasePath: 'classes',
				sidebarPath: require.resolve('./sidebars/sidebar_auto.js'),
				admonitions: {
					keywords: ['note', 'tip', 'info', 'warning', 'danger', 'starfinder', 'origin', 'vanilla', 'pencil', 'table', 'progress'],
					extendDefaults: true
				}
			}
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'skills',
				path: 'skills',
				routeBasePath: 'skills',
				sidebarPath: require.resolve('./sidebars/sidebar_auto.js'),
				admonitions: {
					keywords: ['note', 'tip', 'info', 'warning', 'danger', 'starfinder', 'origin', 'vanilla', 'pencil', 'table', 'progress'],
					extendDefaults: true
				}
			}
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			// image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'Starfinder百科',
				logo: {
					alt: 'bluebear',
					src: 'img/Desna.png'
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'core_rulebook',
						label: '核心规则',
						position: 'left',
						docsPluginId: 'core_rulebook'
					},
					{
						type: 'docSidebar',
						sidebarId: 'themes',
						label: '主题',
						position: 'left',
						docsPluginId: 'themes'
					},
					{
						type: 'docSidebar',
						sidebarId: 'races',
						label: '种族',
						position: 'left',
						docsPluginId: 'races'
					},
					{
						type: 'docSidebar',
						sidebarId: 'classes',
						label: '职业',
						position: 'left',
						docsPluginId: 'classes'
					},
					{
						type: 'docSidebar',
						sidebarId: 'skills',
						label: '技能',
						position: 'left',
						docsPluginId: 'skills'
					}
				]
			},
			footer: {
				style: 'dark',
				links: [
					{
						label: 'Github',
						href: 'https://github.com/xiaoxiaomeow/starfinder'
					}
				],
				copyright: 'Built with <a href="https://docusaurus.io/">Docusaurus</a>.'
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula
			}
		})
};

export default config;
