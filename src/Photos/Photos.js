import unlikedHeart from '../assets/unliked.svg';
import likedHeart from '../assets/liked.svg';

import style from './Photos.module.css';

function Photos({ data, savedIndex, setSavedIndex }) {
  const handleClick = index => {
    setSavedIndex(state => ({
      ...state,
      [index]: !state[index],
    }));
  };

  return (
    <div className={style.photoGrid}>
      {data.map((mrp, i) => {
        return (
          <div className={style.photoCard} key={mrp.id}>
            <img src={mrp.img_src} alt={mrp.rover.name} />
            <div className={style.itemNum}>{mrp.id}</div>
            <section className={style.cardDetails}>
              <section className={style.rover}>
                <h3>Rover</h3>
                <p>
                  <b>Name:</b> {mrp.rover.name}
                </p>
                <p>
                  <b>Landing Date:</b> {mrp.rover.landing_date}
                </p>
                <p>
                  <b>Launch Date:</b> {mrp.rover.launch_date}
                </p>
                <p>
                  <b>Current Status:</b> {mrp.rover.status}
                </p>
              </section>
              <section className='camera'>
                <h3>Camera</h3>
                <p>
                  <b>Name:</b> {mrp.camera.full_name} ({mrp.camera.name})
                </p>
              </section>
            </section>
            <section className={style.likePhoto}>
              <button onClick={() => handleClick(i)}>
                {!savedIndex[i] ? <img src={unlikedHeart} alt='unliked heart' /> : <img src={likedHeart} alt='liked heart' />}
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
