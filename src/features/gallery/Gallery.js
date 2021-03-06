import { Link as ReactLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { useParams } from "react-router-dom";
import ImageGallery from "ui/components/ImageGallery";
import ArrowLeft from "icons/ArrowLeft";

const layout = css`
  padding: 16px 48px;
`;

const Gallery = ({ className }) => {
  const { galleryName } = useParams();
  return (
    <>
      <nav className={className}>
        <ReactLink to="/">
          <ArrowLeft />
        </ReactLink>
      </nav>
      <ImageGallery
        className={className}
        gallery={galleryName}
        redirect={{
          to: "",
        }}
      />
    </>
  );
};

export default styled(Gallery)`
  ${layout}
`;
