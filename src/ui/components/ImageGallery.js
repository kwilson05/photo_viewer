import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useImgix } from "utils/hooks/useImgix";
import ImageCard from "ui/components/ImageCard";
import { useS3Api } from "api/useS3Api";
import GalleryView from "ui/layouts/GalleryView";

const layout = css``;

const ImageGallery = ({ className, gallery }) => {
  const [images, setImages] = useState([]);
  const { getImgixUrl, defaultImgixApiParams } = useImgix();

  const imageDefaultProps = {
    imgixParams: { ...defaultImgixApiParams, fit: "crop", ar: "3:2" },
    sizes: "(min-width:960px) 22vw, (min-width: 640px) 40vw, 100vw",
  };

  const { getS3Images } = useS3Api();

  useEffect(
    () =>
      getS3Images(gallery).then((s3Images) => {
        setImages(s3Images);
      }),
    []
  );

  return (
    <GalleryView className={className}>
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
    </GalleryView>
  );
};

export default styled(ImageGallery)`
  ${layout}
`;
