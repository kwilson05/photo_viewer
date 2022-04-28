import React, { useState, useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useImgix } from "utils/hooks/useImgix";
import ImageCard from "ui/components/ImageCard";
import { useS3Api } from "api/useS3Api";
import GalleryView from "ui/layouts/GalleryView";

const layout = css`
  overflow-y: auto;
  height: 100%;
`;

const getImageTitle = (imageSource) => {
  let imageTitle = imageSource;
  const indexPathSeparator = imageSource.indexOf("/");
  if (indexPathSeparator >= 0) {
    imageTitle = getImageTitle(imageSource.slice(indexPathSeparator + 1));
  }

  const periodIndex = imageTitle.indexOf(".");
  return imageTitle.slice(0, periodIndex);
};

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
    <div className={className}>
      <GalleryView>
        {images?.length > 0 ? (
          images.map((image, imageIndex) => {
            const index = imageIndex;
            return (
              <ReactLink key={image.src} to={`/${gallery}/photo/${index + 1}`}>
                <ImageCard
                  src={getImgixUrl(image.src)}
                  imageTitle={getImageTitle(image.src)}
                  {...imageDefaultProps}
                />
              </ReactLink>
            );
          })
        ) : (
          <p>No images to show :)</p>
        )}
      </GalleryView>
    </div>
  );
};

export default styled(ImageGallery)`
  ${layout}
`;
