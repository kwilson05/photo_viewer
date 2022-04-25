import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useImgix } from "utils/hooks/useImgix";
import ImageCard from "ui/components/ImageCard";
import { useS3Api } from "api/useS3Api";

const layout = css`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  padding: 8px 8px;
`;

const isS3Image = (fileName) => fileName.includes(".");
const createS3Images = (s3ClientResponse) => {
  debugger;
  const s3Images = s3ClientResponse.Contents.map((s3Image) => {
    return isS3Image(s3Image.Key)
      ? {
          src: s3Image.Key,
        }
      : null;
  });

  return s3Images.filter((image) => image);
};

const ImageGallery = ({ className }) => {
  const [images, setImages] = useState([]);
  const { getImgixUrl, defaultImgixApiParams } = useImgix();
  const imageDefaultProps = {
    sizes: "(min-width:960px) 33vw, (min-width: 640px) 50vw, 100vw",
    imgixParams: defaultImgixApiParams,
  };

  const { getS3Images } = useS3Api();

  useEffect(
    () =>
      getS3Images().then((response) => {
        setImages(createS3Images(response));
      }),
    []
  );

  return (
    <div className={className}>
      {images?.length > 0 ? (
        images.map((image) => (
          <ImageCard
            key={image.src}
            src={getImgixUrl(image.src)}
            {...imageDefaultProps}
          />
        ))
      ) : (
        <p>No images to show :)</p>
      )}
    </div>
  );
};

export default styled(ImageGallery)`
  ${layout}
`;
