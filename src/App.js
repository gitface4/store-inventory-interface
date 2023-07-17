import React from 'react'
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import InventoryAlertProvider from "./provider/InventoryAlertContextProvider";
import Stores from "./components/Stores";
import Models from "./components/Models";
import Layout from "./Layout";

function App() {
  return (
      <>
          <Router>
              <InventoryAlertProvider>
                  <Layout>
                      <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/stores" element={<Stores />} />
                          <Route path="/models" element={<Models />} />
                          <Route path="/settings" element={<Settings />} />
                      </Routes>
                  </Layout>
              </InventoryAlertProvider>
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
