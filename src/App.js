import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import APOD from './APOD/APOD';

const BASE_URL = 'https://api.nasa.gov/planetary/apod';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}&count=5`)
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
