import VideoCard from "../videoCard/VideoCard";
import "./NextVideos.scss";

function NextVideos({ nextvideos, VideoSelect }) {
  return (
    <section className="nextvid">
      <h4 className="nextvid__title"> NEXT VIDEOS</h4>
      {nextvideos.map((video) => {
        return (
          <VideoCard
            key={video.id}
            title={video.title}
            id={video.id}
            image={video.image}
            channel={video.channel}
            click={VideoSelect}
          />
        );
      })}
    </section>
  );
}

export default NextVideos;
