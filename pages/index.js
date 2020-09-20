// import Head from 'next/head';
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import matter from "gray-matter";

export default function Home({ posts, title, description, ...props }) {
	return (
		<Layout pageTitle={title} description={description}>
			<div className={styles.container}>
				{/* <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="Description" content={description}></meta>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head> */}

				<main className={styles.main}>
					<h1 className={styles.title}>Welcome</h1>
					<PostList posts={posts} />
				</main>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const siteData = await import(`../config.json`);

	const posts = (context => {
		const keys = context.keys();
		const values = keys.map(context);

		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
			const value = values[index];
			const document = matter(value.default);
			return {
				frontmatter: document.data,
				markdownBody: document.content,
				slug
			};
		});
		return data;
	})(require.context("../content", true, /\.md$/));

	return {
		props: {
			posts,
			title: siteData.default.title,
			description: siteData.default.description
		}
	};
}
