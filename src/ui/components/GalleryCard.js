import React, { useState, useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Imgix from "react-imgix";
import { useImgix } from "utils/hooks/useImgix";
import { useS3Api } from "api/useS3Api";

const layout = css`
  .gallery-title::first-letter {
    text-transform: capitalize;
  }
`;

const findGalleryBackgroundImage = (images) => {
  const galleryBackgroundImage = images.find((image) =>
    image?.src?.includes("gallery-background")
  );

  return galleryBackgroundImage ? galleryBackgroundImage : images[0];
};

const GalleryCard = ({ className, gallery }) => {
  const [imageCount, setImageCount] = useState(0);
  const [galleryBackgroundImage, setGalleryBackgroundImage] = useState({});

  const { getImgixUrl, defaultImgixApiParams } = useImgix();

  const imgixProps = {
    imgixParams: { ...defaultImgixApiParams, fit: "crop", ar: "3:2" },
    sizes: "(min-width:960px) 22vw, (min-width: 640px) 40vw, 100vw",
  };

  const { getS3Images } = useS3Api();

  useEffect(
    () =>
      getS3Images(gallery).then((s3Images) => {
        setImageCount(s3Images.length);
        setGalleryBackgroundImage(findGalleryBackgroundImage(s3Images));
      }),
    []
  );

  return (
    <div className={className}>
      <ReactLink to={`/gallery/${gallery}`}>
        {galleryBackgroundImage && (
          <Imgix
            {...imgixProps}
            src={getImgixUrl(galleryBackgroundImage.src)}
          />
        )}
        <p className="gallery-title">{gallery}</p>
        <p>{imageCount} photos</p>
      </ReactLink>
    </div>
  );
};

export default styled(GalleryCard)`
  ${layout}
`;
