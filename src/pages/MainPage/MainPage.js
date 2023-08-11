import "./MainPage.scss";
import Hero from "../../components/hero/Hero";
import NextVideos from "../../components/nextVideos/NextVideos";
import { useState, useEffect } from "react";
import CommentList from "../../components/commentList/CommentList";
import CommentForm from "../../components/commentForm/CommentForm";
import Video from "../../components/video/Video";
import { useParams } from "react-router-dom";
import axios from "axios";


function MainPage() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [nextVideos, setNextVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { videoId } = useParams();

  //Defining API request by ID function
  function fetchVideoById(inputID) {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/videos/${inputID}`
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
      .get(`${process.env.REACT_APP_BASE_URL}/videos/`)
      .then((response) => {
        setNextVideos(response.data);
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
      fetchVideoById(nextVideos[0].id);
    } else {
      fetchVideoById(videoId);
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
          <NextVideos nextVideosList={nextVideosList} />
        </div>
      </section>
    </div>
  );
}

export default MainPage;
