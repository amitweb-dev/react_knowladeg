import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useState, useEffect } from "react";
import { Provider } from 'react-redux';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/auth/Login';
import Forgotpassword from './components/auth/Forgotpassword';
import AppTheme from './theme/AppTheme';
import ProtectedRoute from './components/ProtectedRoute/Protected';
import Home from './components/main/Home';
import Layout from './components/layout/layout';
import Dashboard from './components/dashboard/dashboard';

function App() {
  // Redux state for Forgotpassword dialog
  
  return (
        <AppTheme>
          <Routes>
            {/* Login route */}
            <Route path="/" element={<Login />} />
            <Route path="/Forgotpassword" element={<Forgotpassword />} />
            {/* Protected Home route with Layout */}
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
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
          </Routes>
        </AppTheme>
  );
}

export default App
