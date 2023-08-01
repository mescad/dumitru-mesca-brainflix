import "./App.scss";
import NavBar from "./components/navbar/navbar";
import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";
import Hero from "./components/hero/hero";
import NextVideos from "./components/NextVideos/NextVideos";
import { useState } from "react";
import CommentList from "./components/commentlist/commentlist";
import CommentForm from "./components/commentform/commentform";
import Video from "./components/Video/Video";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="videos/:videoId" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
