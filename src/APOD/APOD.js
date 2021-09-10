import { useState } from 'react';

import styles from './APOD.module.css';

function APOD({ data }) {
  return (
    <div className={styles.APODS}>
      {data.map((apod, i) => {
        return <div className={styles.apodCard}></div>;
      })}
    </div>
  );
}

export default APOD;
