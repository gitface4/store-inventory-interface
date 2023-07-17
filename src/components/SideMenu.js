import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";
import {Stack} from "react-bootstrap";
import NavMenuItem from './NavMenuItem';

export default function SideMenu() {
    return (
        <Nav defaultActiveKey="/" id="side-menu" className="flex-column">
            <NavMenuItem
                to="/"
                icon="dashboard.png"
                label="Dashboard"
            />
            <NavMenuItem
                to="/stores"
                icon="shop.png"
                label="Stores"
            />
            <NavMenuItem
                to="/models"
                icon="sneakers.png"
                label="Models"
            />
            <NavMenuItem
                to="/settings"
                icon="settings.png"
                label="Settings"
            />
        </Nav>
    );
}
