import { useState, useEffect } from 'react';

export default function useMinimumInventory() {
    const [minimumInventory, setMinimumInventory] = useState(
        () => Number(localStorage.getItem('minimumInventory')) || 5
    );

    useEffect(() => {
        localStorage.setItem('minimumInventory', minimumInventory);
    }, [minimumInventory]);

    return [minimumInventory, setMinimumInventory];
}
