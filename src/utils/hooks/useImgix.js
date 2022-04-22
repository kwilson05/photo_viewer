export const useImgix = () => {
  const getImgixUrl = (imagePath) =>
    `https://kasoziawilson.imgix.net/${imagePath}`;

  const defaultImgixApiParams = {
    fit: "crop",
    fm: "jpg",
  };

  return {
    getImgixUrl,
    defaultImgixApiParams,
  };
};
