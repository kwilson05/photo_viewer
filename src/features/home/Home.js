import React from "react";
import styled, { css } from "styled-components";
import HighlightsImageGallery from "features/home/HighlightsGallery";
import HomeHeader from "features/home/HomeHeader";
import Tabs from "ui/components/tabs/Tabs";
import TabContent from "ui/components/tabs/TabContent";
import GalleryLibrary from "features/home/GalleryLibrary";

const layout = css``;

const Home = ({ className }) => (
  <div className={className}>
    <HomeHeader />
    <Tabs
      tabHeaders={[
        {
          tabId: 0,
          title: "Photos",
        },
        {
          tabId: 1,
          title: "Galleries",
        },
      ]}
    >
      <TabContent tabId={0}>
        <HighlightsImageGallery />
      </TabContent>
      <TabContent tabId={1}>
        <GalleryLibrary />
      </TabContent>
    </Tabs>
  </div>
);

export default styled(Home)`
  ${layout}
`;
