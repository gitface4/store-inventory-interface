import {Badge, Button, Card, Table} from "react-bootstrap";
import React, {useContext} from "react";
import {InventoryAlertContext} from "../context/InventoryAlertContext";

function LowStock({ updates }) {
    const { minimumInventory } = useContext(InventoryAlertContext);

    return (
        <Card className="dashboard-cards">
            <Card.Header>Low Stock</Card.Header>
            <Card.Body>
                <Table>
                    <thead>
                    <tr>
                        <th className="td-fixed-width-md">Store</th>
                        <th className="td-fixed-width-sm">Model</th>
                        <th>Inventory</th>
                        <th>Alert Treshold</th>
                    </tr>
                    </thead>
                    <tbody>
                        {updates.filter(update => update.inventory < minimumInventory).map((update, index) => (
                            <tr key={index}>
                                <td className="td-fixed-width-md">{update.store}</td>
                                <td className="td-fixed-width-sm">{update.model}</td>
                                <td className="text-danger">{update.inventory}</td>
                                <td><Badge pill bg="danger" className="ms-1">{ minimumInventory }</Badge></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default LowStock;
