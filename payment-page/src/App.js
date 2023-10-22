import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Include your imported components here, for example: */}
      <Dashboard />
      <Footer/>
    </div>
  );
}

export default App;
