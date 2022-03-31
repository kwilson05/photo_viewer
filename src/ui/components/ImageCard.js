import styled from "styled-components";
const Card = styled.img`
  height: 300px;
  width: 300px;
`;

const ImageCard = ({ description, src, altText, author }) => {
  return (
    <div>
      <Card src={src} />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default styled(ImageCard)``;
