import React, { createContext, useContext, useState } from "react"

const UserContext = createContext({
    user: {
        id: 2,
        username: "IgnatiusTaurus",
        email: "Ignatius_Thiel@yahoo.com",
        location: "[51.65517222915666, -1.6943713200557795]",
    },
})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        id: 2,
        username: "IgnatiusTaurus",
        email: "Ignatius_Thiel@yahoo.com",
        location: "[51.65517222915666, -1.6943713200557795]",
    })

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
