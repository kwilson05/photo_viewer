import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "features/home/Home";
import Gallery from "features/gallery/Gallery";
import { ImageContextProvider } from "utils/hooks/useImages";
import FullScreen from "features/fullscreen/FullScreen";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery/:galleryName" element={<Gallery />} />
      <Route
        path="/:gallery/photo/:photoId"
        element={
          <ImageContextProvider>
            <FullScreen />
          </ImageContextProvider>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
