import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import MainContent from '../components/AlternatingSection';
import React from 'react';
import MDXContent from '@theme/MDXContent';
import Main from '../main.md';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={clsx('bak-title')}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>

          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>


      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil`}
      description="Découvrez le nouveau concept UrbanReBox">
      <HomepageHeader />
      <main>
        <div className='center_item'>
          <article style={{maxWidth: 1000+'px', marginTop: 20+'px', marginLeft: 20+'px', marginRight: 15+'px'}}>
            <MDXContent>
                <Main/>
            </MDXContent>
          </article>
        </div>

        <MainContent/>
      </main>
    </Layout>


  );
}


