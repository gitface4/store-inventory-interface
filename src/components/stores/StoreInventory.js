import React, { useState } from 'react';
import {Form, Card, Table, Stack, Button, Badge} from "react-bootstrap";
import useMinimumInventory from "../../hooks/useMinimumInventory";

const storeNames = ['ALDO Centre Eaton', 'ALDO Destiny USA Mall', 'ALDO Pheasant Lane Mall', 'ALDO Holyoke Mall', 'ALDO Maine Mall', 'ALDO Crossgates Mall', 'ALDO Burlington Mall', 'ALDO Solomon Pond Mall', 'ALDO Auburn Mall', 'ALDO Waterloo Premium Outlets'];

export default function StoreInventory({ updates }) {
    const [selectedStore, setSelectedStore] = useState(storeNames[0]);
    const [minimumInventory] = useMinimumInventory();

    const dangerFontColor = (inventory) => {
        if (inventory < minimumInventory) {
            return "text-danger";
        }
    }

    const handleSelectChange = (event) => {
        setSelectedStore(event.target.value);
    };

    return (
        <Card className="dashboard-cards">
            <Card.Header>
                <Stack direction="horizontal">
                    Store Inventory
                    <Form.Select
                        className="td-fixed-width-md d-block ms-auto me-0"
                        aria-label="Select Store"
                        onChange={handleSelectChange}>
                        {storeNames.map((store, index) => (
                            <option key={index} value={store}>{store}</option>
                        ))}
                    </Form.Select>
                </Stack>
            </Card.Header>
            <Card.Body>
                <Table>
                    <thead>
                    <tr>
                        <th className="td-fixed-width-md">Model</th>
                        <th>Inventory</th>
                        <th>Alert Threshold</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    {updates.filter(update => update.store === selectedStore).sort((a, b) => a.model.localeCompare(b.model)).map((update, index) => (
                        <tr key={index}>
                            <td className="td-fixed-width-md">{update.model}</td>
                            <td className={dangerFontColor(update.inventory)}>{update.inventory}</td>
                            <td><Badge pill bg="danger" className="ms-1">{ minimumInventory }</Badge></td>
                            <td>
                                {update.inventory < minimumInventory &&
                                    <Button variant="danger" size="sm">Reorder</Button>
                                }
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
