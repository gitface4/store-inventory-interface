import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import {Stack} from "react-bootstrap";

function SideMenu() {
    return (
        // TODO - MAKE NAVITEM A COMPONENT
        <Nav defaultActiveKey="/" id="side-menu" className="flex-column">
            <Nav.Item className="py-3">
                <Nav.Link as={Link} to="/">
                    <Stack>
                        <img src={process.env.PUBLIC_URL + '/dashboard.png'} alt="logo" className="side-menu-logo mb-2 d-block ms-auto me-auto" />
                        Dashboard
                    </Stack>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="py-3">
                <Nav.Link as={Link} to="/stores">
                    <Stack>
                        <img src={process.env.PUBLIC_URL + '/shop.png'} alt="logo" className="side-menu-logo mb-2 d-block ms-auto me-auto" />
                        Stores
                    </Stack>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="py-3">
                <Nav.Link as={Link} to="/models">
                    <Stack>
                        <img src={process.env.PUBLIC_URL + '/sneakers.png'} alt="logo" className="side-menu-logo mb-2 d-block ms-auto me-auto" />
                        Models
                    </Stack>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item className="py-3">
                <Nav.Link as={Link} to="/settings">
                    <Stack>
                        <img src={process.env.PUBLIC_URL + '/settings.png'} alt="logo" className="side-menu-logo mb-2 d-block ms-auto me-auto" />
                        Settings
                    </Stack>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default SideMenu;
