import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crypto News',
    Svg: require('@site/static/img/bitcoin-btc-logo.svg').default,
    description: (
      <>
        Many experts expected the next war to be one of a digital nature, so it's important to explore the
	relationship between blockchain, cryptocurrencies, and the Russian invasion of Ukraine.
      </>
    ),
  },
  {
    title: 'Social Media Analysis',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Russia has a well-documented history of using information warfare against other nations -
	as a result, the current Russia-Ukraine war has been characterized by widespread disinformation.
      </>
    ),
  },
  {
    title: 'Internet Status',
    Svg: require('@site/static/img/Starlink_Logo.svg').default,
    description: (
      <>
        With many Internet service centers across the country destroyed in bomb strikes, Ukrainians
	have resorted to new alternative methods of connecting to the web.
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
