import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  params: { initiation_param: "nothingtoseehere" },
});

export const SearchProvider = ({ children }) => {
  const [params, setParams] = useState({
    initiation_param: "nothingtoseehere",
  });

  return (
    <SearchContext.Provider value={{ params }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
