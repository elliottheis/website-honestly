// @flow

import React from 'react';
import ReactGA from 'react-ga';

import logAmplitudeEvent from '../../tracking/amplitude';
import styles from './style.css';

const trackAnalytics = campaignName => () => {
  logAmplitudeEvent('CLICK EVENTS BANNER');
  ReactGA.event({
    category: 'Event banner',
    action: 'click',
    label: campaignName || 'Events campaign',
  });
};

type Props = {
  url: string,
  altText: string,
  campaignName: string,
  desktopURL: string,
  tabletURL: string,
  mobileURL: string,
};

export default function EventsBanner({
  url,
  altText,
  campaignName,
  desktopURL,
  tabletURL,
  mobileURL,
}: Props) {
  return (
    <div className={styles.bannerContainer}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackAnalytics(campaignName)}
      >
        <img src={desktopURL} alt={altText} className={styles.eventsDesktopBanner} />
        <img src={tabletURL} alt={altText} className={styles.eventsTabletBanner} />
        <img src={mobileURL} alt={altText} className={styles.eventsMobileBanner} />
      </a>
    </div>
  );
}
