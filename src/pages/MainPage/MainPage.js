import "./MainPage.scss";
import NavBar from "../../components/navbar/navbar";
import VideoDetails from "../../data/video-details.json";
import Videos from "../../data/videos.json";
import Hero from "../../components/hero/hero";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import CommentList from "../../components/commentlist/commentlist";
import CommentForm from "../../components/commentform/commentform";
import Video from "../../components/Video/Video";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
const API_KEY = "9663a0a0-cabd-4462-9549-c7dfe61feca5";

function MainPage() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [nextVideos, setNextList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { videoId } = useParams();
  console.log(videoId);

  // const handleVideoClick = (id) => {
  //   const selectedVideo = currentVideo.find((video) => video.id === id);
  //   if (selectedVideo) {
  //     setCurrentVideo(selectedVideo);
  //   }
  // };

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`)
      .then((response) => {
        setNextList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!nextVideos) {
      return;
    }

    if (!videoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${nextVideos[0].id}?api_key=${API_KEY}`
        )
        .then((response) => {
          setCurrentVideo(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${API_KEY}`
        )
        .then((response) => {
          setCurrentVideo(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [nextVideos, videoId]);

  console.log(currentVideo);

  // /time conversion

  // const { videoId } = useParams();

  // console.log(videoId);

  // const product = VideoDetails.find((vid) => vid.id === videoId);

  // console.log(product);

  // if (!product) {
  //   return <Navigate to={"/"} />
  // }

  if (isLoading) {
    return <h1> Page is loading</h1>;
  }

  let dateArray = new Date(currentVideo.timestamp);
  let date = dateArray.toLocaleDateString();
  const nextVideosList = nextVideos.filter(
    (video) => video.id !== currentVideo.id
  );

  return (
    <div>
      <Video image={currentVideo.image} />
      <section className="app__separation">
        <div className="app__half app__half--left">
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
          <CommentList comments={currentVideo.comments} />
        </div>

        <div className="app__half app__half--right">
          <NextVideos nextvideos={nextVideosList} />
        </div>
      </section>
    </div>
    // <h1>HELLO</h1>
  );
}

export default MainPage;
