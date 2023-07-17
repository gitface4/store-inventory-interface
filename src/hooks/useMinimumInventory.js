import { useState } from 'react';

function useMinimumInventory() {
    const [minimumInventory, setMinimumInventory] = useState(10);

    return { minimumInventory, setMinimumInventory };
}

export default useMinimumInventory;
