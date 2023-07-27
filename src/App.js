import "./App.css";
import NavBar from "./components/navbar/navbar";
import VideoDetails from "./data/video-details.json";
//import Videos from "./data/videos.json";
import Hero from "./components/hero/hero";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";
import CommentList from "./components/commentlist/commentlist";
import CommentForm from "./components/commentform/commentform";

function App() {
  // console.log(VideoDetails);


  //use state for the full list of videos - will have to be passed as a prop to the recommended videos and filtered
  // use state for the current video
  //function to update the current video state
  //pass this function as a prop to the videolist

// const [currentArray, setCurrentArray]=useState[VideoDetails]
  
  //invoke function and give id
const [currentVideo, setCurrentVideo]= useState(VideoDetails[0])

const nextVideos= VideoDetails.filter(video=>video.id !== currentVideo.id)

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


      <NextVideos nextvideos={nextVideos} onVideoSelect={setCurrentVideo}/>
    </div>
  );
}

export default App;
