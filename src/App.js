import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './App.module.css';
import Photos from './Photos/Photos';

const BASE_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

function App() {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?sol=1000&page=${currPage}&api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setData(res.data.photos);
      })
      .catch(err => console.error(err));
  }, [currPage]);

  const prevPage = e => {
    e.preventDefault();
    setCurrPage(currPage - 1);
  };

  const nextPage = e => {
    e.preventDefault();
    setCurrPage(currPage + 1);
  };

  if (!data) {
    return (
      <div className={style.loadingContainer}>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <h1>Mars Rover Photos</h1>
        <Photos data={data} />
        <nav>
          <button onClick={prevPage} disabled={currPage === 1}>
            Previous
          </button>
          <button onClick={nextPage}>Next</button>
        </nav>
      </div>
    );
  }
}

export default App;
