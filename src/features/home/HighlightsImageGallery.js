import styled, { css } from "styled-components";
import ImageGallery from "ui/components/ImageGallery";

const layout = css``;

const HighlightsImageGallery = ({ className }) => (
  <ImageGallery gallery="highlights" />
);

export default styled(HighlightsImageGallery)`
  ${layout}
`;
