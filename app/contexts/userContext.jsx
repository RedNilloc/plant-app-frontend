import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  user: {
    user_id: 2,
    username: "IgnatiusTaurus",
    email: "Ignatius_Thiel@yahoo.com",
    location: "[51.65517222915666, -1.694371320055779]",
  },
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_id: 2,
    username: "IgnatiusTaurus",
    email: "Ignatius_Thiel@yahoo.com",
    location: "[51.65517222915666, -1.694371320055779]",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
