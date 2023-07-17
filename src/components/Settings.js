import React from 'react'
import {Col, Row} from "react-bootstrap";
import InventoryAlertTreshold from "./InventoryAlertTreshold";

function Settings() {
    return (
        <div>
            <Row className="py-5">
                <h1> Settings </h1>
            </Row>
            <Row>
                <Col xs={2}>
                    <InventoryAlertTreshold />
                </Col>
            </Row>
        </div>
    )
}

export default Settings;
