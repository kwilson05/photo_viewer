import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useS3Api } from "api/useS3Api";
import GalleryCard from "ui/components/GalleryCard";
import GalleryView from "ui/layouts/GalleryView";

const layout = `padding: 16px 48px;`;

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
    <GalleryView className={className}>
      {galleries ? (
        galleries.map((gallery) => (
          <GalleryCard key={gallery.name} gallery={gallery.name} />
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
