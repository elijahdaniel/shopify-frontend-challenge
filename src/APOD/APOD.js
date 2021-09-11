import { useState } from 'react';

import styles from './APOD.module.css';

function APOD({ data }) {
  return (
    <div className={styles.APODS}>
      {data.map((apod, i) => {
        return (
          <div className={styles.apodCard}>
            <h1>{apod.title}</h1>
            {apod.url.match(/[\/.](gif|jpg|jpeg|tiff|png)$/i) ? <img src={apod.url} alt={apod.title} /> : <iframe src={apod.url}></iframe>}
            <p>{apod.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}

export default APOD;
