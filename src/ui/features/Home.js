import { useState } from "react";
import styled from "styled-components";
import ImageCard from "../components/ImageCard";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

const REGION = process.env.S3_REGION;
const IDENTITY_POOL_ID = process.env.AWS_S3_IDENTITY_POOL_ID;

const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID,
  }),
});

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 8px;
`;

const test = async () => {
  // List the photo albums that exist in the bucket
  var albumBucketName = "photo-viewer-kasozi"; //BUCKET_NAME
  try {
    const data = await s3.send(
      new ListObjectsCommand({ Delimiter: "/", Bucket: albumBucketName })
    );
  } catch (err) {
    debugger;
    console.log(err);
  }
};
const Home = () => {
  test();
  return (
    <ImagesContainer>
      <p>hello world</p>
    </ImagesContainer>
  );
};

export default Home;
