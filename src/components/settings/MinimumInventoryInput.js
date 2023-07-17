import React from 'react';
import { Card } from "react-bootstrap";
import useMinimumInventory from '../../hooks/useMinimumInventory';

function InventoryAlertThreshold() {
    const [minimumInventory, setMinimumInventory] = useMinimumInventory();

    const handleChange = (event) => {
        setMinimumInventory(Number(event.target.value));
    };

    return (
        <Card>
            Minimum Inventory
            <input type="number" value={minimumInventory} onChange={handleChange} />
        </Card>
    );
}

export default InventoryAlertThreshold;
