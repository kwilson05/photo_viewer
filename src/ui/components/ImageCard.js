import styled from "styled-components";
const Image = styled.img`
  height: 300px;
  width: 300px;
`;

const ImageCard = ({ description, src, altText, author }) => {
  return (
    <div>
      <Image src={src} />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default styled(ImageCard)``;
