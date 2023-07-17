import React, { useState } from 'react';
import { InventoryAlertContext } from '../context/InventoryAlertContext';

function InventoryAlertProvider({ children }) {
    const [minimumInventory, setMinimumInventory] = useState(10);

    return (
        <InventoryAlertContext.Provider value={{ minimumInventory, setMinimumInventory }}>
            {children}
        </InventoryAlertContext.Provider>
    );
}

export default InventoryAlertProvider;
