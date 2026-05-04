import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MaxUnityComponent from '../components/maxUnityComponent';
import FeatureListTop from '../components/toolFeaturesTop'
import FeatureListBottom from '../components/toolFeaturesBottom'

import styles from './index.module.css';
import MaxUnityImg from '/img/MaxUnityInterfaces.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <h3 className={styles.heroSubtitle}>
             A quality and quality of experience evaluation toolkit for VR research
          </h3>
          <p className={styles.heroTagline}>{siteConfig.tagline}<br /></p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.buttonRounder)}
              to="/docs/intro">
              Documentation
            </Link>
          </div>
        </div>
        <div className={styles.backgroundImage}></div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`QExE tool`}
      description="Quality of Experience Evaluation Toolkit">
      <HomepageHeader />
      <main>
        <FeatureListTop/>
        <MaxUnityComponent
        imageUrl={MaxUnityImg}/>
        <FeatureListBottom/>
      </main>
    </Layout>
  );
}