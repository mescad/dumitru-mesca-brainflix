import "./App.scss";
import NavBar from "./components/navBar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


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
