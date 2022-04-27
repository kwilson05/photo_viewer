import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useImgix } from "utils/hooks/useImgix";
import ImageCard from "ui/components/ImageCard";
import { useS3Api } from "api/useS3Api";

const layout = css`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  row-gap: 8px;
  column-gap: 8px;
  padding: 8px 48px;
`;

const HighlightsGallery = ({ className }) => {
  const [images, setImages] = useState([]);
  const { getImgixUrl, defaultImgixApiParams } = useImgix();

  const imgixParams = {
    ...defaultImgixApiParams,
    fit: "crop",
    ar: "3:2",
  };
  const imageDefaultProps = {
    imgixParams: imgixParams,
    sizes: "(min-width:960px) 22vw, (min-width: 640px) 40vw, 100vw",
  };

  const { getS3Images } = useS3Api();

  useEffect(
    () =>
      getS3Images("highlights").then((s3Images) => {
        setImages(s3Images);
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

export default styled(HighlightsGallery)`
  ${layout}
`;
