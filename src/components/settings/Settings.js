import React from 'react'
import {Col, Row} from "react-bootstrap";
import MinimumInventoryInput from "./MinimumInventoryInput";

export default function Settings() {
    return (
        <div>
            <Row className="py-5">
                <h1> Settings </h1>
            </Row>
            <Row>
                <Col xs={2}>
                    <MinimumInventoryInput />
                </Col>
            </Row>
        </div>
    )
}
