import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      {/* <Home/> */}
      <Routes>
        <Route path='servicos' element={<Header />} />
        <Route path='/' element={<Footer />} />
      </Routes>


      <Footer />

    </BrowserRouter>
  </React.StrictMode>,
)
