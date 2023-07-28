import "./hero.scss";
import likelogo from '../../assets/Icons/likes.svg'
import viewlogo from '../../assets/Icons/views.svg'

function Hero(props) {
  return (
    <section className="hero">
      <div className="hero__top">
        <video controls poster={props.image}  className="hero__video"  />
      </div>

      <section className="hero__wrapper">

      <div className="hero__mid">
        <h3 className="hero__title">{props.title}</h3>
      </div>

      <div className="hero__bot">
        <div className="hero__info hero__info--left">
          <p className="hero__channel">By {props.channel}</p>
          <p className="hero__time">{props.date} </p>
        </div>

        <div className="hero__info hero__info--right">
          <div className='hero__views'>
            <img alt='views_icon' className="hero__views__icon" src={viewlogo}/>
            <p className="hero__views__count">{props.views}</p>
          </div>

          <div className="hero__likes">
            <img alt='likes_icon'className="hero__likes__icon" src={likelogo} />
            <p className="hero__likes__count"> {props.likes}</p>
          </div>
        </div>
      </div>

      <article>
        <p className="hero__description">{props.description}</p>
      </article>

      <article>
        <p className="hero__commentcount">{props.comments.length} Comments</p>
      </article>

      </section>


    </section>
  );
}

export default Hero;
