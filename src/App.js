import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "features/Home";
import { S3ImagesProvider } from "utils/hooks/useS3Images";
const App = () => (
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
);

export default App;
