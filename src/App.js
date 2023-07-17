import React from 'react'
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideMenu from './components/SideMenu';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import {Col, Container, Row} from "react-bootstrap";
import InventoryAlertProvider from "./provider/InventoryAlertContextProvider";
import Stores from "./components/Stores";
import Models from "./components/Models";

function App() {
  return (
      <>
        <Router>
            <Container fluid>
                <Row>
                    <Col xs={1} className="ps-0">
                        <SideMenu />
                    </Col>
                    <Col>
                      <InventoryAlertProvider>
                          <Routes>
                              <Route path="/" element={<Dashboard />} />
                              <Route path="/stores" element={<Stores />} />
                              <Route path="/models" element={<Models />} />
                              <Route path="/settings" element={<Settings />} />
                          </Routes>
                      </InventoryAlertProvider>
                    </Col>
                </Row>
            </Container>
        </Router>

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

export default App;
