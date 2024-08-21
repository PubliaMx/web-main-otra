// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
