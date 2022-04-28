import { useState, useEffect } from "react";
import { useParams, useNavigate, Link as ReactLink } from "react-router-dom";
import styled, { css } from "styled-components";
import Imgix from "react-imgix";
import { useImageContext } from "utils/hooks/useImages";
import { useImgix } from "utils/hooks/useImgix";
import ArrowLeft from "icons/ArrowLeft";

const layout = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 32px 32px;
`;
const getImageTitle = (imageSource) => {
  if (!imageSource) {
    return "";
  }
  let imageTitle = imageSource;
  const indexPathSeparator = imageSource.indexOf("/");
  if (indexPathSeparator >= 0) {
    imageTitle = getImageTitle(imageSource.slice(indexPathSeparator + 1));
  }

  const periodIndex = imageTitle.indexOf(".");
  return imageTitle.slice(0, periodIndex);
};

const FullScreen = ({ className }) => {
  const [image, setImage] = useState({});
  const { photoId, gallery } = useParams();
  const { images } = useImageContext();
  const navigate = useNavigate();
  const { getImgixUrl, defaultImgixApiParams } = useImgix();

  useEffect(() => {
    setImage(images[photoId - 1]);
  }, [images]);

  const imageDefaultProps = {
    imgixParams: { ...defaultImgixApiParams, fit: "crop", ar: "3:2" },
    sizes: "(min-width:960px) 50vw, (min-width: 640px) 40vw, 100vw",
  };

  const showLastPhoto = () => {
    if (photoId > 1) {
      navigate(`/${gallery}/photo/${parseInt(photoId) - 1}`);
    }
  };

  const showNextPhoto = () => {
    if (images.length > photoId) {
      navigate(`/${gallery}/photo/${parseInt(photoId) + 1}`);
    }
  };

  return image ? (
    <div className={className}>
      <nav>
        <ArrowLeft onClick={() => showLastPhoto()} />
      </nav>
      <Imgix
        src={getImgixUrl(image.src)}
        imageTitle={getImageTitle(image.src)}
        {...imageDefaultProps}
      />
      <nav>
        <ArrowLeft onClick={showNextPhoto()} />
      </nav>
    </div>
  ) : (
    <p>No image no :)</p>
  );
};

export default styled(FullScreen)`
  ${layout}
`;
