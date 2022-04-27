import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useS3Api } from "api/useS3Api";
import GalleryCard from "ui/components/GalleryCard";
import GalleryView from "ui/layouts/GalleryView";

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
    <GalleryView>
      {galleries ? (
        galleries.map((gallery) => (
          <GalleryCard key={gallery.name} gallery={gallery} />
        ))
      ) : (
        <p>No galleries here :)</p>
      )}
    </GalleryView>
  );
};

export default styled(GalleryLibrary)`
  ${layout}
`;
