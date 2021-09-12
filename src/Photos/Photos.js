import style from './Photos.module.css';

function Photos({ data }) {
  return (
    <div className={style.photoGrid}>
      {data.map(mrp => {
        return (
          <div className={style.photoCard}>
            <img src={mrp.img_src} alt={mrp.rover.name} />
            <b>Camera: </b>
            <span>
              {mrp.camera.full_name} ({mrp.camera.name})
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
