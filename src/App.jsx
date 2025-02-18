import React from 'react';
import './App.css';
import Home from './pages/home/home';
import { Route, Routes } from 'react-router-dom';
import ReactSetup from './pages/reactsetup/reactsetup';
import ThreeFiberSetup from './pages/threefibersetup/threefibersetup';
import MernSetup from './pages/mernsetup/mernsetup';
import Footer from './components/common/footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reactsetup' element={<ReactSetup />} />
        <Route path='/threefibersetup' element={<ThreeFiberSetup />} />
        <Route path='/mernsetup' element={<MernSetup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
