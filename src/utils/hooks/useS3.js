import React, { useContext } from "react";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client } from "@aws-sdk/client-s3";

const S3_REGION = process.env.S3_REGION;
const IDENTITY_POOL_ID = process.env.AWS_S3_IDENTITY_POOL_ID;
const S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;

const AWS_COGNITO_CREDENTIALS = fromCognitoIdentityPool({
  client: new CognitoIdentityClient({ region: S3_REGION }),
  identityPoolId: IDENTITY_POOL_ID,
});

const intitalS3Context = {
  s3Client: new S3Client({
    region: S3_REGION,
    credentials: AWS_COGNITO_CREDENTIALS,
  }),
  category: null,
  s3BucketName: S3_BUCKET_NAME,
};
const S3Context = React.createContext(intitalS3Context);

export const useS3 = () => useContext(S3Context);
