import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import ImageGallery from "ui/components/ImageGallery";

const layout = css``;

const Gallery = ({ className }) => {
  const { galleryName } = useParams();
  return <ImageGallery className={className} gallery={galleryName} />;
};

export default styled(Gallery)`
  ${layout}
`;
