import React, { useContext, useState, useEffect } from "react";
import { useS3ImagesApi } from "api/useS3ImagesApi";

const createS3Images = (s3ClientResponse) => {
  const s3Images = s3ClientResponse.Contents.map((s3Image) => ({
    src: s3Image.Key,
  }));

  return s3Images;
};

const S3ImagesContext = React.createContext([]);

export const S3ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  const { getS3Images } = useS3ImagesApi();

  useEffect(
    () =>
      getS3Images().then((response) => {
        const temp = createS3Images(response);
        setImages(temp);
      }),
    []
  );

  return (
    <S3ImagesContext.Provider value={{ images }}>
      {children}
    </S3ImagesContext.Provider>
  );
};

export const useS3Images = () => useContext(S3ImagesContext);
