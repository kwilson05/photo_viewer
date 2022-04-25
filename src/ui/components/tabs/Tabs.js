import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TabsProvider } from "ui/components/tabs/TabsContext";
import TabHeader from "ui/components/tabs/TabHeader";

const TabHeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
`;
const layout = css``;

const sortHeadersByIDAsc = (tabA, tabB) => {
  if (tabA.tabId < tabB.tabId) return -1;
  else return 1;
};

const Tabs = ({ className, children, tabHeaders }) => {
  const [activeTabId, setActiveTabId] = useState(0);

  //If no headers, render no component
  if (!tabHeaders || tabHeaders?.length <= 0) {
    return null;
  }

  //sort headers in ascending order by id
  tabHeaders.sort(sortHeadersByIDAsc);

  return (
    <TabsProvider value={(activeTabId, setActiveTabId)}>
      <TabHeaderContainer>
        {tabHeaders.map((tabHeader) => {
          const { title, tabId } = tabHeader;
          return (
            <TabHeader key={tabId} tabId={tabId} title={title}></TabHeader>
          );
        })}
      </TabHeaderContainer>
      <div>{children}</div>
    </TabsProvider>
  );
};

export default styled(Tabs)`
  ${layout}
`;
