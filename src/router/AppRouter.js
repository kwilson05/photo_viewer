import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "features/home/Home";
import Gallery from "features/gallery/Gallery";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery/:galleryName" element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
