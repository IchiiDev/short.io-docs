import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to implement',
    imageUrl: 'project-diagram-solid.svg',
    description: (
      <>
        The Short.io package may be implemented easely in any working codebase. 
        No need to transform all your code.
      </>
    ),
  },
  {
    title: 'Focus on your code',
    imageUrl: `user-clock-solid.svg`,
    description: (
      <>
        The power of short.io makes it easy to interact with your URL shortner service, instead of making dozens of lines of code
      </>
    ),
  },
  {
    title: 'Low in size',
    imageUrl: 'cube-solid.svg',
    description: (
      <>
        The package uses only one dependency to work and goes to the essential to improve it's weight
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center feature--images">
          <img className={styles.featureImage} src={`img/${imgUrl}`} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">NodeJS wrapper for the <a href="https://short.io" target="_blank">short.io</a> API</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Read the docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
