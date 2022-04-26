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

const HighlightsGallery = ({ className }) => {
  const [images, setImages] = useState([]);
  const { getImgixUrl, defaultImgixApiParams } = useImgix();
  const imageDefaultProps = {
    sizes: "(min-width:960px) 33vw, (min-width: 640px) 50vw, 100vw",
    imgixParams: defaultImgixApiParams,
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
