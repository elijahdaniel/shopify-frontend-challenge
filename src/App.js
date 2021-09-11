import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import APOD from './APOD/APOD';

const BASE_URL = 'https://api.nasa.gov/planetary/apod';

function App() {
  const [data, setData] = useState([]);
  const currDate = new Date();
  const endDate = `${currDate.getFullYear()}-${('0' + currDate.getMonth()).slice(-2)}-${('0' + currDate.getDate()).slice(-2)}`;
  console.log(endDate);
  useEffect(() => {
    axios
      .get(
        // `${BASE_URL}?start_date=2021-05-05?end_date=${endDate}?api_key=${process.env.REACT_APP_API_KEY}&start_date=2017-07-08&end_date=2017-07-10&count=9`
        `${BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&start_date=2021-08-01&end_date=${endDate}`
      )
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <APOD data={data} />
    </div>
  );
}

export default App;
