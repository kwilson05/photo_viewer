import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useS3Api } from "api/useS3Api";
import GalleryCard from "ui/components/GalleryCard";

const layout = ``;

const createS3Galleries = (data) => {
  return (
    data.CommonPrefixes &&
    data.CommonPrefixes.map((gallery) => ({
      galleryName: decodeURIComponent(gallery.Prefix.replace("/", "")),
    }))
  );
};

const GalleryLibrary = ({ className }) => {
  const [galleries, setGalleries] = useState([]);
  const { getS3Galleries } = useS3Api();

  useEffect(
    () =>
      getS3Galleries().then((data) => {
        setGalleries(createS3Galleries(data));
      }),
    []
  );

  return galleries ? (
    galleries.map((gallery) => <GalleryCard gallery={gallery} />)
  ) : (
    <p>No galleries here :)</p>
  );
};

export default styled(GalleryLibrary)`
  ${layout}
`;
