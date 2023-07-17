import React, {createContext, useContext, useState} from 'react';
import useInventoryUpdates from "../hooks/useInventoryUpdates";

export const InventoryContext = createContext();

export const InventoryContextProvider = ({ children }) => {
    const inventoryUpdates = useInventoryUpdates();
    const [minimumInventory, setMinimumInventory] = useState(10);

    return (
        <InventoryContext.Provider value={{ inventoryUpdates, minimumInventory, setMinimumInventory }}>
            {children}
        </InventoryContext.Provider>
    );
}

export const useInventory = () => useContext(InventoryContext);

