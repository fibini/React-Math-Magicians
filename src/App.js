import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calcu from './pages/Calculator';
import Quote from './pages/Quote';
import Navbar from './pages/Navbar';
import Home from './pages/Home';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calcu />} />
          <Route exact path="/quotes" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
