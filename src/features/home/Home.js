import React from "react";
import styled, { css } from "styled-components";
import ImageGallery from "ui/components/ImageGallery";
import HomeHeader from "features/home/HomeHeader";

const layout = css``;

const Home = ({ className }) => (
  <div className={className}>
    <HomeHeader />
    <ImageGallery />
  </div>
);

export default styled(Home)`
  ${layout}
`;
