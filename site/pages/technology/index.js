// @flow

import React from 'react';
import ReactGA from 'react-ga';
import styles from './style.css';

import BlogSlice from './blog-slice';
import WebinarSignupSlice from './webinar-signup-slice';
import { TechChecklist } from '../../slices/checklist-contact-us-slice';

import { WhiteSlice, GreenSlice } from '../../components/slice';
import { HubspotButton } from '../../components/buttons';
import { P, H1, H2, H3 } from '../../components/text';
import Image from '../../components/image';
import Social from '../../components/social';
import ScrollTracker from '../../components/scroll-tracker';

import roundTableImage from './images/2018-april-roundtable.png';
import roundTableImage2x from './images/2018-april-roundtable@2x.png';
import roundTableImage3x from './images/2018-april-roundtable@3x.png';

import metaImage from './meta-image.jpg';

type Props = {
  triedAndTestedBlogPosts: Array<Object>,
  growingTrendsBlogPosts: Array<Object>,
};

const trackPDFReportClicks = () =>
  ReactGA.event({
    category: 'Read PDF Report button',
    action: 'click',
    label: 'Technology',
  });

const social = {
  title: 'Technology | Red Badger',
  description:
    'We choose the right tech for the job, have meticulous engineering practices and enable continuous delivery.',
  metaImage,
  altText: 'The sentence "We choose the right tech for the job".',
  url: 'https://red-badger.com/technology',
};

const TechnologyPage = ({ triedAndTestedBlogPosts, growingTrendsBlogPosts }: Props) => (
  <ScrollTracker>
    <Social {...social} />
    <WhiteSlice>
      <div className={styles.heading}>
        <H1>We love tech, but we only choose what’s right for the job.</H1>
      </div>
    </WhiteSlice>
    <GreenSlice>
      <div className={styles.green}>
        <div className={styles.left}>
          <div className={styles.image}>
            <H2 customClass={styles.roundTableHeading}>Tech Round Table</H2>
            <Image src={roundTableImage} src2x={roundTableImage2x} src3x={roundTableImage3x} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.roundTableSubHeading}>
            <H3 type="fontM2">April 2018 Report</H3>
          </div>
          <div className={styles.description}>
            <P customClass={styles.roundTableDescription}>
              Technology doesn’t stand still and neither do we. Find out which new and fully adopted
              technologies our team think are adding value.
            </P>
          </div>
          <HubspotButton hubspotName="roundtable" gaTracking={trackPDFReportClicks} />
        </div>
      </div>
    </GreenSlice>
    <section className={styles.pastAndFuture}>
      <div className={styles.leftBlogs}>
        <BlogSlice blogPosts={triedAndTestedBlogPosts} title="Tried and tested" />
      </div>
      <div className={styles.rightBlogs}>
        <BlogSlice blogPosts={growingTrendsBlogPosts} title="Growing trends" altStyle />
      </div>
    </section>
    <WebinarSignupSlice />
    <TechChecklist />
  </ScrollTracker>
);

export default TechnologyPage;
