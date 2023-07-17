import React from 'react'
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {Stack} from "react-bootstrap";

export default function NavMenuItem({to, icon, label}) {
    return (
        <Nav.Item className="py-3">
            <Nav.Link as={Link} to={to}>
                <Stack>
                    <img src={process.env.PUBLIC_URL + "/" + icon} alt="logo" className="side-menu-logo mb-2 d-block ms-auto me-auto" />
                    {label}
                </Stack>
            </Nav.Link>
        </Nav.Item>
    )
}
