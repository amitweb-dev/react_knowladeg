import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useState, useEffect } from "react";
import './App.css'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/auth/Login';
import Forgotpassword from './components/auth/Forgotpassword';
import AppTheme from './theme/AppTheme';
import ProtectedRoute from './components/ProtectedRoute/Protected';
import Home from './components/main/Home';
import Layout from './components/layout/layout';



function App() {
  return (
    <BrowserRouter>
      <AppTheme>
        <Routes>
          {/* Login route */}
          <Route path="/" element={<Login />} />
          <Route path="/Forgotpassword" element={<Forgotpassword />} />
          {/* Protected Home route */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppTheme>
    </BrowserRouter>
  );
}

export default App
