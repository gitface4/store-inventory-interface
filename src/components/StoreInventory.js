import React, { useState } from 'react';
import {Form, Card, Table, Stack} from "react-bootstrap";

const storeNames = ['ALDO Centre Eaton', 'ALDO Destiny USA Mall', 'ALDO Pheasant Lane Mall', 'ALDO Holyoke Mall', 'ALDO Maine Mall', 'ALDO Crossgates Mall', 'ALDO Burlington Mall', 'ALDO Solomon Pond Mall', 'ALDO Auburn Mall', 'ALDO Waterloo Premium Outlets'];

export default function StoreInventory({ updates }) {
    const [selectedStore, setSelectedStore] = useState(storeNames[0]);

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
                    </tr>
                    </thead>
                    <tbody>
                    {updates.filter(update => update.store === selectedStore).map((update, index) => (
                        <tr key={index}>
                            <td className="td-fixed-width-md">{update.model}</td>
                            <td>{update.inventory}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
