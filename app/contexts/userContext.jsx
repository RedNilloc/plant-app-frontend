import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: {
    username: "AdrienneGemini",
    email: "Adrienne_Brown43@hotmail.com",
    location: "[51.996511955730675, -1.0707122543715286]",
  },
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "AdrienneGemini",
    email: "Adrienne_Brown43@hotmail.com",
    location: "[51.996511955730675, -1.0707122543715286]",
  });

  return (
    <UserContext.Provider value={{ params }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
