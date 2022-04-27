import styled, { css } from "styled-components";

const layout = css`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  row-gap: 8px;
  column-gap: 8px;
  padding: 16px 48px;
`;

const GalleryView = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default styled(GalleryView)`
  ${layout}
`;
