import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: {
    id: 3,
    username: "AdrienneGemini",
    email: "Adrienne_Brown43@hotmail.com",
    location: "[51.996511955730675, -1.0707122543715286]",
  },
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 3,
    username: "AdrienneGemini",
    email: "Adrienne_Brown43@hotmail.com",
    location: "[51.996511955730675, -1.0707122543715286]",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
