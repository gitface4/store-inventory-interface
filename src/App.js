import React from 'react'
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import { InventoryContextProvider } from "./provider/InventoryContextProvider";
import Stores from "./components/Stores";
import Models from "./components/Models";
import Layout from "./Layout";
import {ToastContainer} from "react-toastify";

function App() {
  return (
      <>
          <Router>
              <InventoryContextProvider>
                  <Layout>
                      <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/stores" element={<Stores />} />
                          <Route path="/models" element={<Models />} />
                          <Route path="/settings" element={<Settings />} />
                      </Routes>
                  </Layout>
              </InventoryContextProvider>
          </Router>
    </>
  );
}

export default App;
