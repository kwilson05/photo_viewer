import styled, { css } from "styled-components";

const layout = css`
  position: relative;
  width: 100%;
  .back-button {
    position: absolute;
    top: 0;
    left: 8;
  }
`;

const ImageView = ({ className, children, redirectPath }) => (
  <div className={className}>
    <nav className="back-button">
      <ReactLink to={redirectPath}>
        <ArrowLeft />
      </ReactLink>
    </nav>
    {children}
  </div>
);

export default styled(ImageView)`
  ${layout}
`;
