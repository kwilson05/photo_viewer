import styled, { css } from "styled-components";
import { useImgix } from "utils/hooks/useImgix";
import ImageCard from "ui/components/ImageCard";

const layout = css`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  padding: 8px 8px;
`;
const s3Images = [
  {
    imagePath: "makers-11.jpg",
  },
  {
    imagePath: "makers-11.jpg",
  },
  {
    imagePath: "makers-11.jpg",
  },
  {
    imagePath: "makers-11.jpg",
  },
];
const ImageGallery = () => {
  //const { s3Images } = useS3Images();
  const { getImgixUrl, defaultImgixApiParams } = useImgix();

  const imageDefaultProps = {
    sizes: "(min-width:960px) 33vw, (min-width: 640px) 50vw, 100vw",
    imgixParams: defaultImgixApiParams,
  };

  return (
    <>
      {s3Images.map((image) => (
        <ImageCard
          key={image.imagePath}
          src={getImgixUrl(image.imagePath)}
          width={600}
          height={600}
          {...imageDefaultProps}
        />
      ))}
    </>
  );
};

export default styled(ImageGallery)`
  ${layout}
`;
