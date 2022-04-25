import React, { createContext, useContext, useState } from "react";

const TabsContext = createContext({ activeTabId: 0, setActiveTabId: () => {} });

export const TabsProvider = ({ children }) => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <TabsContext.Provider value={{ activeTabId, setActiveTabId }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => useContext(TabsContext);
