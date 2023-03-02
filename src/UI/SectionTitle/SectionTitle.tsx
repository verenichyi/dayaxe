import React, { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const SectionTitle = ({ children }: PropsWithChildren) => {
  return (
    <h2 className={styles.sectionTitle}>
      {children}
    </h2>
  );
};

export default SectionTitle;
