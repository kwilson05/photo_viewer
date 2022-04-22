export const useImgix = () => {
  const getImgixUrl = (imagePath) =>
    `https://kasoziawilson.imgix.net/${imagePath}`;
  return {
    getImgixUrl,
  };
};
