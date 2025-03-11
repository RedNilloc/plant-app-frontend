import React, { createContext, useContext, useState } from "react"

const individualPlantContext = createContext({
    plant: { id: 855 },
})

export const individualPlantProvider = ({ children }) => {
    const [plant, setPlant] = useState({
        id: 855,
    })

    return (
        <individualPlantContext.Provider value={{ plant }}>
            {children}
        </individualPlantContext.Provider>
    )
}

export const useIndividualPlant = () => useContext(individualPlantContext)
