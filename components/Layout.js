import Head from 'next/head'
import Header from './Header'
import styles from '../styles/Home.module.css';

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="Description" content={description}></meta>
      </Head>
      
      <Header />

      <section className="layout">
        <div className="content">{children}</div>
      </section>
      <footer className={styles.footer}>Built by me!</footer>
    </>
  )
}