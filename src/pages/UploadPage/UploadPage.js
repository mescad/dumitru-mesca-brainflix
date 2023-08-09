import "./UploadPage.scss";
import NavBar from "../../components/navbar/navbar";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UploadPage() {
  const [publish, setPublished] = useState(null);
  const formRef = useRef();

  function publishFunction(event) {
    
    const click = event.target;
    event.preventDefault();
    
    setPublished(click);

    const input = {
      name: formRef.current.name.value,
      program: formRef.current.program.value,
      grade: formRef.current.grade.value,
    };

   // axios.post()
  }

  return (
    <>
      <section className="upload">
        <h3 className="upload__pagetitle"> Upload Video</h3>
        <form className="upload__form" ref={formRef} onSubmit={publishFunction}>
          <div className="upload__videogroup">
            <label className="upload__label">VIDEO THUMBNAIL</label>
            <img className="upload__thumbnail" src={uploadImage} />
          </div>
          <div className="upload__inputgroup">
            <label className="upload__label">TITLE YOUR VIDEO </label>
            <input
              className="upload__title"
              placeholder="Add a title to your video"
            />
            <label className="upload__label">ADD A VIDEO DESCRIPTION </label>
            <textarea
              className="upload__textarea"
              placeholder="Add a description to your video"
            />
          </div>
        </form>

        <div className="upload__buttongroup">
          <button
            
            className="upload__buttongroup--publish"
          >
            PUBLISH
          </button>
          <Link className="upload__buttongroup--cancel--anchor" to="/">
            <button className="upload__buttongroup--cancel">CANCEL </button>
          </Link>
        </div>

        {publish && (
          <p className="upload__published"> Video Successfully Published! </p>
        )}
      </section>
    </>
  );
}

export default UploadPage;
