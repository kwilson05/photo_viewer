import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { useS3 } from "utils/hooks/useS3";

export const useS3ImagesApi = () => {
  const { s3Client, s3BucketName } = useS3();

  const getS3Images = () =>
    s3Client.send(
      new ListObjectsCommand({ Delimiter: "/", Bucket: s3BucketName })
    );

  return {
    getS3Images,
  };
};
