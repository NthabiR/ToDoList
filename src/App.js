import React from 'react';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './components/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={ <Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
