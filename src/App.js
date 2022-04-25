import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCss from "./theme/ResetCss";
import Home from "features/home/Home";
import { S3ImagesProvider } from "utils/hooks/useS3Images";
const App = () => (
  <>
    <ResetCss />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <S3ImagesProvider>
              <Home />
            </S3ImagesProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
