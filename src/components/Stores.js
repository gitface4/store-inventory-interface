import React from 'react'
import {Col, Row} from "react-bootstrap";
import useInventoryUpdates from "../hooks/useInventoryUpdates";
import StoreInventory from "./StoreInventory";

export default function Stores() {
    const updates = useInventoryUpdates();

    return (
        <div>
            <Row className="py-5">
                <h1> Stores </h1>
            </Row>
            <Row>
                <Col xs={8}>
                    <StoreInventory updates={updates} />
                </Col>
            </Row>
        </div>
    )
}
