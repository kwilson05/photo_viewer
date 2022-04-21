import styled, { css } from "styled-components";
import Imgix from "react-imgix";
import { useImgix } from "../utils/hooks/useImgix";

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
  //const { getImgxUrl } = useImgix();

  const { getImgixUrl } = useImgix();

  return (
    <>
      {s3Images.map((image) => (
        <Imgix
          key={image.imagePath}
          sizes="(min-width:960px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={getImgixUrl(image.imagePath)}
          imgixParams={{
            fit: "crop",
            fm: "jpg",
          }}
          width={600}
          height={600}
        />
      ))}
    </>
  );
};

export default styled(ImageGallery)`
  ${layout}
`;
