import { Link as ReactLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import ImageGallery from "ui/components/ImageGallery";

const layout = css``;

const Gallery = ({ className }) => {
  const { galleryName } = useParams();
  return (
    <>
      <nav>
        <ReactLink to="/">
          <button type="button">Back</button>
        </ReactLink>
      </nav>
      <ImageGallery className={className} gallery={galleryName} />
    </>
  );
};

export default styled(Gallery)`
  ${layout}
`;
