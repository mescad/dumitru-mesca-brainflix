import "./Video.scss";

function Video(props) {
  return (
    <div className="videosection">
      <video controls poster={props.image} className="videosection__video" />
    </div>
  );
}
export default Video;
