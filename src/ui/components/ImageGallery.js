import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useImgix } from "utils/hooks/useImgix";
import { useS3Images } from "utils/hooks/useS3Images";
import ImageCard from "ui/components/ImageCard";
import { useS3ImagesApi } from "api/useS3ImagesApi";

const layout = css`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  padding: 8px 8px;
`;

const ImageGallery = () => {
  const { images } = useS3Images();
  const { getImgixUrl, defaultImgixApiParams } = useImgix();
  const imageDefaultProps = {
    sizes: "(min-width:960px) 33vw, (min-width: 640px) 50vw, 100vw",
    imgixParams: defaultImgixApiParams,
  };

  return (
    <>
      {images?.length > 0 ? (
        images.map((image) => (
          <ImageCard
            key={image.src}
            src={getImgixUrl(image.src)}
            width={600}
            height={600}
            {...imageDefaultProps}
          />
        ))
      ) : (
        <p>No images to show :)</p>
      )}
    </>
  );
};

export default styled(ImageGallery)`
  ${layout}
`;
