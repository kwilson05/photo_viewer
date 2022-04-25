import React from "react";
import styled from "styled-components";
import { useTabsContext } from "./TabsContext";

const TabContent = ({ className, tabId, children }) => {
  const { activeTabId } = useTabsContext();

  if (activeTabId != tabId) {
    return null;
  }

  return <section className={className}>{children}</section>;
};

export default styled(TabContent)``;
