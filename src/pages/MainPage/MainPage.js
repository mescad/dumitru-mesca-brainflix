import "./MainPage.scss";
import Hero from "../../components/hero/hero";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useState, useEffect } from "react";
import CommentList from "../../components/commentlist/commentlist";
import CommentForm from "../../components/commentform/commentform";
import Video from "../../components/Video/Video";
import { useParams } from "react-router-dom";
import axios from "axios";
const API_KEY = "9663a0a0-cabd-4462-9549-c7dfe61feca5";

function MainPage() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [nextVideos, setNextList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { videoId } = useParams();

  //Defining API request by ID function
  function apiIdRequest(inputID) {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${inputID}?api_key=${API_KEY}`
      )
      .then((response) => {
        setCurrentVideo(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
      apiIdRequest(nextVideos[0].id);
    } else {
      apiIdRequest(videoId);
    }
  }, [nextVideos, videoId]);

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
  );
}

export default MainPage;
