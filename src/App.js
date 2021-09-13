import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollRotate } from 'react-scroll-rotate';

import Photos from './Photos/Photos';

import chevLeft from './assets/chevron-left.svg';
import chevRight from './assets/chevron-right.svg';
import marsRotation from './assets/mars-rotation.gif';
import mars from './assets/mars.png';

import style from './App.module.css';

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
        <header>
          <section className={style.headDescription}>
            <h1>Mars Rover Photos</h1>
            <a href='#nav' className={style.cta}>
              View Photos
            </a>
          </section>
          <ScrollRotate method={'perc'}>
            <img src={mars} alt='the planet mars' className={style.marsHeader} />
          </ScrollRotate>
        </header>
        <nav id='nav'>
          <p>Current Page: {currPage}</p>
          <img src={marsRotation} alt='mars continuously rotating' className={style.marsRotation} />
          <div className='btns'>
            <button onClick={prevPage} disabled={currPage === 1}>
              <img src={chevLeft} alt='previous page' />
            </button>
            <button onClick={nextPage}>
              <img src={chevRight} alt='next page' />
            </button>
          </div>
        </nav>
        <Photos data={data} />
        <footer>
          <span>Developed by:</span>{' '}
          <a href='https://www.elijahdaniel.dev' target='_blank' rel='noreferrer'>
            elijahdaniel
          </a>{' '}
          | API:{' '}
          <a href='https://api.nasa.gov/' target='_blank' rel='noreferrer'>
            NASA - Mars Rover Photos
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
