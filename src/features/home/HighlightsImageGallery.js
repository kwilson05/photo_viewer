import styled, { css } from "styled-components";
import ImageGallery from "ui/components/ImageGallery";

const layout = css`
  padding: 16px 48px;
`;

const HighlightsImageGallery = ({ className }) => (
  <ImageGallery className={className} gallery="highlights" />
);

export default styled(HighlightsImageGallery)`
  ${layout}
`;
