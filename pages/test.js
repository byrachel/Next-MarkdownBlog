import Layout from '../components/Layout';

export default function family({ title, description, ...props }) {
    return (
        <Layout pageTitle={`${title} | Family`} description={description}>
            <h1 className="title">eForLink Family</h1>

            <p className="description">
            {description}
            </p>

            <p>
            I am a very exciting person. I know this because I'm following a very exciting tutorial, and a not-exciting person wouldn't do that.
            </p>
        </Layout>
    )
}

export async function getStaticProps() {
    const siteData = await import(`../config.json`);
  
    return {
      props: {
        title: siteData.default.title,
        description: siteData.default.description,
      },
    };
  }