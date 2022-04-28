import styled, { css } from "styled-components";
import Imgix from "react-imgix";

const style = css`
  cursor: pointer;
  position: relative;
  :hover {
    & .image-title {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      color: white;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 50px;
      width: 100%;
      position: absolute;
      transition: opacity 0.2s ease 0s, max-height 0.2s ease 0s;
      color: white;
      background: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.6) 100%);
      z-index: 1;
      padding-left: 4px;
    }
  }

  .image-title {
    display: none;
  }
`;

const ImageCard = ({ className, imageTitle, ...props }) => (
  <div className={className}>
    <Imgix {...props} />
    <aside className="image-title">
      <p>{imageTitle}</p>
    </aside>
  </div>
);

export default styled(ImageCard)`
  ${style}
`;
