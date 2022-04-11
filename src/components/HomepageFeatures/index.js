import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crypto News',
    Svg: require('@site/static/img/bitcoin-btc-logo.svg').default,
    description: (
      <>
        Exploring the relationship between Bitcoin, blockchain, and the Russian invasion of Ukraine.
      </>
    ),
  },
  {
    title: 'Social Media Analysis',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        TODO
      </>
    ),
  },
  {
    title: 'Internet Status',
    Svg: require('@site/static/img/Starlink_Logo.svg').default,
    description: (
      <>
        With many Internet service centers across the country destroyed, Ukrainians
	have resorted to alternative methods of connecting to the web.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
