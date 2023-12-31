import {useEffect, useState} from 'react';
import useMinimumInventory from "./useMinimumInventory";
import {toast} from "react-toastify";


function useInventoryUpdates() {
    const [updates, setUpdates] = useState([]);
    const [minimumInventory] = useMinimumInventory();

    const inventoryAlert = (inventoryUpdate) => {
        if (inventoryUpdate.inventory <= minimumInventory && inventoryUpdate.inventory > 0) {
            toast.warning(
                <div>
                    <div className="toast-header">Low Stock Alert</div>
                    <div className="toast-body">
                        The model <strong>{inventoryUpdate.model}</strong> only
                        has <strong>{inventoryUpdate.inventory}</strong> left
                        in stock at <strong>{inventoryUpdate.store}</strong>.
                    </div>
                </div>,
            );
        }

        if (inventoryUpdate.inventory === 0) {
            toast.error(
                <div>
                    <div className="toast-header">No Stock Left</div>
                    <div className="toast-body">
                        The model <strong>{inventoryUpdate.model}</strong> has
                        no stock left at <strong>{inventoryUpdate.store}</strong>.
                    </div>
                </div>,
            );
        }
    }

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080/');

        ws.onmessage = (event) => {
            const inventoryUpdate = JSON.parse(event.data);

            setUpdates(prevUpdates => {
                const index = prevUpdates.findIndex(
                    update => update.model === inventoryUpdate.model && update.store === inventoryUpdate.store
                );

                if (index !== -1) {
                    console.log('DUPLICATE FOUND', inventoryUpdate)
                    // If found, replace the old item with the new one
                    return [
                        inventoryUpdate,
                        ...prevUpdates
                    ];
                } else {
                    // If not found, just add the new update
                    return [...prevUpdates, inventoryUpdate];
                }
            });

            inventoryAlert(inventoryUpdate);
        };

        return () => ws.close();
    }, []);

    return updates;
}

export default useInventoryUpdates;


