import VideoCard from "../videoCard/VideoCard";
function NextVideos(props) {



function VideoClick(video){
    props.onVideoSelect(video)
}
  
  return (
    <section>
        <h4> Next Videos</h4>
      {props.nextvideos.map((video) => (
        <VideoCard
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
