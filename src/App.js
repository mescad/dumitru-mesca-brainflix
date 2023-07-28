import "./App.css";
import NavBar from "./components/navbar/navbar";
import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json"
import Hero from "./components/hero/hero";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";
import CommentList from "./components/commentlist/commentlist";
import CommentForm from "./components/commentform/commentform";

function App() {

const [currentVideo, setCurrentVideo]= useState(VideoDetails[0])
const nextVideos= Videos.filter(video=>video.id !== currentVideo.id)




const handleVideoClick= (id)=>{
  const selectedVideo= VideoDetails.find(video=>video.id === id);
  if (selectedVideo){
    setCurrentVideo(selectedVideo)
  }
}


///time conversion
  let dateArray= new Date(currentVideo.timestamp)
  let date= dateArray.toLocaleDateString()



  return (
    <div>
      <NavBar />
      <Hero
        title={currentVideo.title}
        likes={currentVideo.likes}
        views={currentVideo.views}
        channel={currentVideo.channel}
        date={date}
        image={currentVideo.image}
        description={currentVideo.description}
        comments={currentVideo.comments}
      />
      <CommentForm />
      <CommentList comments={currentVideo.comments}/>


      <NextVideos nextvideos={nextVideos} VideoSelect={handleVideoClick}/>
    </div>
  );
}

export default App;
