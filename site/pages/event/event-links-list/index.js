// Displays list of links related to the event

import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import layout from '../../../components/utils/layout.css';
import styles from './style.css';

const EventLinksList = ({ linkList, listType }) => {
  if (!linkList || linkList.length === 0) return <noscript />;
  return (
    <div
      className={classNames({
        [styles.eventLinkList]: true,
        [layout.cf]: true,
      })}
    >
      {linkList.map(eventLink => (
        <a
          className={styles.fullDetailsLink}
          href={eventLink.url}
          key={eventLink.url}
          target={listType === 'external' ? '_blank' : null}
          rel={listType === 'external' ? 'noopener' : null}
        >
          <span>{eventLink.title}</span>
        </a>
      ))}
    </div>
  );
};

EventLinksList.propTypes = {
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  listType: PropTypes.oneOf(['external', 'internal']).isRequired,
};

export default EventLinksList;
