import { Link } from "react-router-dom";
import "./VideoCard.scss";

function VideoCard({ id, image, title, channel }) {
  return (
    <Link to={`/videos/${id}`}> 
    <section id={id} className="videocard" >
      <img alt="video_thumb" className="videocard__thumbnail" src={image} />
      <div className="videocard__info">
        <h3 className="videocard__title">{title}</h3>
        <h4 className="videocard__channel">{channel}</h4>
      </div>
    </section></Link>
  );
}

export default VideoCard;
