import styled from "styled-components";
import Imgix from "react-imgix";

const ImageCard = ({ description, ...props }) => {
  return (
    <>
      <Imgix {...props} />
    </>
  );
};

export default styled(ImageCard)``;
