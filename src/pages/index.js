import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
			</div>
		</header>
	);
}

function HomepageFeatures() {
	return (
		<div className="container">
			<p className="hero__subtitle">
				这是一个正在搭建中的Starfinder中文百科。
			</p>
		</div>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout title={`${siteConfig.title}`}>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
