import VideoCard from "../videoCard/VideoCard";
import './NextVideos.scss'


function NextVideos({nextvideos, onVideoSelect}) {

function VideoClick(video){
    onVideoSelect(video)
}
  
  return (
    <section className="nextvid">
        <h4 className="nextvid__title"> Next Videos</h4>
      {nextvideos.map((video) => (
        <VideoCard
          key={video.id}
          title={video.title}
          id={video.id}
          image={video.image}
          channel={video.channel}
          click={()=>VideoClick(video)}
        />
      ))}
    </section>
  );
}

export default NextVideos;
