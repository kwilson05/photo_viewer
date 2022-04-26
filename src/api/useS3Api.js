import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { useS3 } from "utils/hooks/useS3";

const getPrefix = (folder) => (!!folder ? `${folder}/` : "");

const createS3Images = (data) => {
  const images = data.Contents.map((s3Image) => {
    return s3Image.Size > 0 ? { src: s3Image.Key } : null;
  });

  return (images && images.filter((image) => !!image)) || [];
};

const createS3Galleries = (data) => {
  return (
    data.CommonPrefixes &&
    data.CommonPrefixes.map((gallery) => ({
      name: decodeURIComponent(gallery.Prefix.replace("/", "")),
    }))
  );
};

export const useS3Api = () => {
  const { s3Client, s3BucketName } = useS3();

  const getS3Images = (gallery) => {
    const prefix = getPrefix(gallery);
    return s3Client
      .send(
        new ListObjectsCommand({
          Delimiter: "/",
          Prefix: prefix,
          Bucket: s3BucketName,
        })
      )
      .then((data) => createS3Images(data));
  };

  const getS3Galleries = () => {
    return s3Client
      .send(new ListObjectsCommand({ Delimiter: `/`, Bucket: s3BucketName }))
      .then((data) => createS3Galleries(data));
  };

  return {
    getS3Images,
    getS3Galleries,
  };
};
