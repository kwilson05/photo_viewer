import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext({ activeTabId: 0, setActiveTabId: () => {} });

export const ACTIVE_TAB_LOCAL_STORAGE_KEY = "active-tab-key";

export const TabsProvider = ({ children }) => {
  const [activeTabId, setActiveTabId] = useState(
    JSON.parse(localStorage.getItem(ACTIVE_TAB_LOCAL_STORAGE_KEY)) || 0
  );

  const setActiveTab = (activeTabId) => {
    localStorage.setItem(ACTIVE_TAB_LOCAL_STORAGE_KEY, JSON.parse(activeTabId));
    setActiveTabId(activeTabId);
  };

  return (
    <TabsContext.Provider value={{ activeTabId, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => useContext(TabsContext);
