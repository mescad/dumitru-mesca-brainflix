import "./App.css";
import NavBar from "./components/navbar/navbar";
import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";
import Hero from "./components/hero/hero";

function App() {
  // console.log(VideoDetails);

  const PageVideo = VideoDetails[0];
  console.log(PageVideo);

  let views = PageVideo.views;
  let likes = PageVideo.likes;
  let title = PageVideo.title;
  let description = PageVideo.description;
  let channel = PageVideo.channel;
  let timestamp = PageVideo.timestamp;
  let image = PageVideo.image;

  let dateArray= new Date(timestamp)
  let date= dateArray.toLocaleDateString()





 



  console.log(views);

  return (
    <div>
      <NavBar />
      <Hero
        title={title}
        likes={likes}
        views={views}
        channel={channel}
        date={date}
        image={image}
        description={description}
      />
    </div>
  );
}

export default App;
