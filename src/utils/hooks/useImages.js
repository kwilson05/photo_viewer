import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useS3Api } from "api/useS3Api";

const ImageContext = React.createContext({
  images: [],
  setActiveGallery: () => {},
});

export const ImageContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const { gallery } = useParams();

  const { getS3Images } = useS3Api();

  useEffect(() => {
    if (gallery) {
      getS3Images(gallery).then((s3Images) => {
        setImages(s3Images);
      });
    }
  }, [gallery]);

  return (
    <ImageContext.Provider value={{ images }}>{children}</ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
