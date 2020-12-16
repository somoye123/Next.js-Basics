import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Whether figuring out a difficult problem or crafting a beautiful user
          experience, programming satisfies my desire for both constant learning
          and ongoing refinement. As a Full Stack Developer, I look forward to
          learning and working continuously with driven and successful teams,
          while expanding my fluency in multiple programming languages. I'm able
          to deliver excellent results under a tight schedule. Outside of my
          tech life, I enjoy being a pianist. I'm always available to have a
          conversation, so feel free to contact me if there's something you'd
          like to discuss.
        </p>
      </section>
    </Layout>
  );
}
