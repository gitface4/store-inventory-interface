import React, {useContext} from 'react';
import LastSales from './LastSales';
import LowStock from './LowStock';
import useInventoryUpdates from '../hooks/useInventoryUpdates';
import {Col, Row} from "react-bootstrap";
import {useInventory} from "../provider/InventoryContextProvider";

export default function Dashboard() {
    const { inventoryUpdates } = useInventory();

    return (
        <div>
            <Row className="py-5">
                <h1> Dashboard </h1>
            </Row>
            <Row>
                <Col xs={8}>
                    <LowStock updates={inventoryUpdates} />
                    <LastSales updates={inventoryUpdates} />
                </Col>
            </Row>
        </div>
    );
}
