import React from "react";

const GalleryCard = ({ gallery }) => {
  const { galleryName } = gallery;

  return <div> {galleryName}</div>;
};

export default GalleryCard;
