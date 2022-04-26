import React from "react";

const GalleryCard = ({ gallery }) => {
  const { name } = gallery;

  return <div> {name}</div>;
};

export default GalleryCard;
