import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useS3Api } from "api/useS3Api";
import GalleryCard from "ui/components/GalleryCard";
import Gallery from "ui/components/Gallery";

const layout = ``;

const GalleryLibrary = ({ className }) => {
  const [galleries, setGalleries] = useState([]);
  const { getS3Galleries } = useS3Api();

  useEffect(
    () =>
      getS3Galleries().then((galleries) => {
        setGalleries(galleries);
      }),
    []
  );

  return (
    <Gallery>
      {galleries ? (
        galleries.map((gallery) => (
          <GalleryCard key={gallery.name} gallery={gallery} />
        ))
      ) : (
        <p>No galleries here :)</p>
      )}
    </Gallery>
  );
};

export default styled(GalleryLibrary)`
  ${layout}
`;
