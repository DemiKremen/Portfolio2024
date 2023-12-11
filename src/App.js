import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar';
import 'popper.js';
import Menu from './Menu/Menu';
import Portada from './Menu/Portada';


function App() {
  return (
    <div>
      <Navbar />
      <Portada />
    </div>
  );
}

export default App;
