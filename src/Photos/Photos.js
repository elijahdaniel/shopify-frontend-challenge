import style from './Photos.module.css';

function Photos({ data }) {
  return (
    <div className={style.photoGrid}>
      {data.map(mrp => {
        return (
          <div className={style.photoCard} key={mrp.id}>
            <img src={mrp.img_src} alt={mrp.rover.name} />
            <section className={style.cardDetails}>
              <h3>Camera</h3>
              <p>
                <b>Name:</b> {mrp.camera.full_name} ({mrp.camera.name})
              </p>
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
          </div>
        );
      })}
    </div>
  );
}

export default Photos;
