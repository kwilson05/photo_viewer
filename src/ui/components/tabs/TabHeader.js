import React from "react";
import styled, { css } from "styled-components";
import { useTabsContext } from "ui/components/tabs/TabsContext";

const layout = css`
  cursor: pointer;
  border: none;
  padding: 12px 20px;

  transition: background-color 0.2s ease, color 0.2s ease;
  font-weight: 700;
  background-color: light-gray;
  color: orange;

  &:not(:disabled) {
    background-color: white;
    color: cyan;
  }

  &:hover:not(:disabled) {
    color: orange;
  }

  :focus {
    outline: none;
  }
`;

const TabHeader = ({ className, tabId, title }) => {
  const { activeTabId, setActiveTab } = useTabsContext();
  const isDisabled = activeTabId === tabId;
  return (
    <button
      className={className}
      type="button"
      disabled={isDisabled}
      role="button"
      onClick={() => setActiveTab(tabId)}
    >
      {title}
    </button>
  );
};

export default styled(TabHeader)`
  ${layout}
`;
