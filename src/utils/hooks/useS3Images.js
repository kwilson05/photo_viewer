import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
const REGION = process.env.S3_REGION;
const IDENTITY_POOL_ID = process.env.AWS_S3_ID;
ENTITY_POOL_ID;
const albumBucketName = "photo-viewer-kasozi";
const credentials = fromCognitoIdentityPool({
  client: new CognitoIdentityClient({ region: REGION }),
  identityPoolId: IDENTITY_POOL_ID,
});

const useS3Images = () => {
  const s3Client = new S3Client({
    region: REGION,
    credentials: credentials,
  });
};
/*

const albumBucketName = "photo-viewer-kasozi";
const s3BaseUrl = "https://s3." + REGION + ".amazonaws.com/";
const bucketUrl = s3BaseUrl + albumBucketName + "/";
const getImages = async () => {
  // List the photo albums that exist in the bucket
  try {
    const data = await s3Client.send(
      new ListObjectsCommand({ Delimiter: "/", Bucket: albumBucketName })
    );
    const images = data.Contents.map((image) => {
      const imageKey = image.Key;
      const imageUrl = bucketUrl + encodeURIComponent(imageKey);
      return {
        src: imageUrl,
      };
    });
    return images;
  } catch (err) {
    console.log(err);
  }
  return [];
};*/
