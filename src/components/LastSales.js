import React from 'react';
import {Card, Table} from "react-bootstrap";

function LastSales({ updates }) {
    return (
        <Card className="dashboard-cards mb-4">
            <Card.Header>Last Sales</Card.Header>
            <Card.Body>
                <Table>
                    <thead>
                        <tr>
                            <th className="td-fixed-width-md">Store</th>
                            <th className="td-fixed-width-sm">Model</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {updates.map((update, index) => (
                            <tr key={index}>
                                <td className="td-fixed-width-md">{update.store}</td>
                                <td className="td-fixed-width-sm">{update.model}</td>
                                <td>{update.inventory}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default LastSales;