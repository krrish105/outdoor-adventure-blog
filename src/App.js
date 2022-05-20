import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componets/global/Footer';
import Header from './componets/global/Header';
import './main.scss'
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
