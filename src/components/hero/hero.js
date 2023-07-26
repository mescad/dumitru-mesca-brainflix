import "./hero.scss";


function Hero(props) {
  return (
    <section className="hero">
      <div className="hero__top">
        <video controls poster={props.image}  className="hero__video"  />
      </div>

      <div className="hero__mid">
        <h3 className="hero__title">{props.title}</h3>
      </div>

      <div className="hero__bot">
        <div className="hero__info hero__info--left">
          <p className="hero__channel">{props.channel}</p>
          <p className="hero__time">{props.date} </p>
        </div>

        <div className="hero__info hero__info--right">
          <div className='hero__views'>
            <img />
            <p>{props.views}</p>
          </div>

          <div className="hero__likes">
            <img />
            <p> {props.likes}</p>
          </div>
        </div>
      </div>

      <article>
        <p>{props.description}</p>
      </article>


    </section>
  );
}

export default Hero;
