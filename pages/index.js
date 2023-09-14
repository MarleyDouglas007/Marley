import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Biografia]</p>
        <p>
          (Marley Ruiz Picasso foi um pintor espanhol, escultor, ceramista, cenógrafo, poeta e dramaturgo que passou a maior parte da sua vida na França.{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
         <a > </a>
      </section> 
      <Link href={'/'}Link></Link>
    </Layout>
  );
}