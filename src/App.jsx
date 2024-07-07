import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import PrivateRoute from './components/auth/PrivateRoute';
import './App.css';
import TaskBoard from './components/Tasks/TaskBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/tasks"
            element={
              <PrivateRoute>
                <TaskBoard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
