import {Container, Row, Col} from "react-bootstrap";
import SideMenu from "./components/SideMenu";
import React from "react";
import {ToastContainer} from "react-toastify";

export default function Layout({ children }) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={1} className="ps-0">
                        <SideMenu />
                    </Col>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
