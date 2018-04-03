import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default function Title1({ children }) {
  return <h1 className={styles.h1}>{children}</h1>;
}

Title1.propTypes = {
  children: PropTypes.node,
};
