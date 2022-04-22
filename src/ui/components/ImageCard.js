import styled from "styled-components";
import Imgix from "react-imgix";

const ImageCard = ({ description, ...props }) => {
  return (
    <div>
      <Imgix {...props} />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default styled(ImageCard)``;
