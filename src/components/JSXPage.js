import Layout from '@theme/Layout';

export default function JSXPage({ title, description, children }) {
	return (
		<Layout title={title} description={description}>
			<main class="container container--fluid margin-vert--lg">
				<article>{children}</article>
			</main>
		</Layout>
	);
}