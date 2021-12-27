import React from 'react';
import styles from './SiteWrapper.module.css';
const SiteWrapper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default SiteWrapper;
