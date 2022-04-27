import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useImgix } from "utils/hooks/useImgix";
import ImageCard from "ui/components/ImageCard";
import { useS3Api } from "api/useS3Api";
import Gallery from "ui/components/Gallery";

const layout = css``;

const HighlightsGallery = ({ className }) => {
  const [images, setImages] = useState([]);
  const { getImgixUrl, defaultImgixApiParams } = useImgix();

  const imageDefaultProps = {
    imgixParams: { ...defaultImgixApiParams, fit: "crop", ar: "3:2" },
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
    <Gallery>
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
    </Gallery>
  );
};

export default styled(HighlightsGallery)`
  ${layout}
`;
