import "./UploadPage.scss";

import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axios from "axios";

function UploadPage() {
  const [publish, setPublished] = useState(null);
  const formRef = useRef();
  const navigate = useNavigate();

  function publishFunction(event) {
    event.preventDefault();

    const input = {
      title: formRef.current.title.value,
      description: formRef.current.description.value,
    };

    axios
      .post("http://localhost:8080/videos/upload", input)
      .then((response) => {
        console.log(response.data);
        setPublished(response.data);
        setTimeout(function () {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.error("Error uploading video", error);
      });
  }

  return (
    <>
      <section className="upload">
        <h3 className="upload__pagetitle"> Upload Video</h3>
        <form onSubmit={publishFunction} className="upload__form" ref={formRef}>
          
          <section className="upload__videosection"> 
          <div className="upload__videogroup">
            <label className="upload__label">VIDEO THUMBNAIL</label>
            <img
              className="upload__thumbnail"
              alt="uploadimg"
              src={uploadImage}
            />
          </div>
          <div className="upload__inputgroup">
            <label className="upload__label">TITLE YOUR VIDEO </label>
            <input
              id="title"
              className="upload__title"
              placeholder="Add a title to your video"
            />
            <label className="upload__label">ADD A VIDEO DESCRIPTION </label>
            <textarea
              id="description"
              className="upload__textarea"
              placeholder="Add a description to your video"
            />
          </div>


          </section>
          

          <div className="upload__buttongroup">
          <button
            type="submit"
            
            className="upload__buttongroup--publish"
          >
            PUBLISH
          </button>
          <Link className="upload__buttongroup--cancel" to="/">
            CANCEL
          </Link>
        </div>

        </form>

        

        {publish && (
          <p className="upload__published"> Video Successfully Published! </p>
        )}
      </section>
    </>
  );
}

export default UploadPage;
