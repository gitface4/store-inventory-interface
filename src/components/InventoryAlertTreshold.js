import React, {useContext} from 'react';
import {InventoryAlertContext} from "../context/InventoryAlertContext";
import {Card} from "react-bootstrap";

function InventoryAlertThreshold() {
    const { minimumInventory, setMinimumInventory } = useContext(InventoryAlertContext);

    const handleChange = (event) => {
        setMinimumInventory(event.target.value);
    };

    return (
        <Card>
            Minimum Inventory
            <input type="number" value={minimumInventory} onChange={handleChange} />
        </Card>
    );
}

export default InventoryAlertThreshold;
