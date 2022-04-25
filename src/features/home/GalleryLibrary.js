import React from "react";

const layout = ``;

const sortByGalleryNameAsc = (galleryA, galleryB) => {
  if (galleryA.galleryName < galleryB.galleryName) return -1;
  else return 1;
};
const GalleryLibrary = ({ className }) => {
  const [galleries, setGalleries] = useState([]);
  const { getS3Galleries } = useS3Api();

  useEffect(
    () =>
      getS3Galleries().then((response) => {
        setGalleries(createS3Galleries(response));
      }),
    []
  );

  return galleries.map((gallery) => <GalleryCard gallery={gallery} />);
};

export default styled(GalleryLibrary)``;
