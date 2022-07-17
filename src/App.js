import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calcu from './components/pages/Calcu';
import Quote from './components/pages/Quote';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';

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
