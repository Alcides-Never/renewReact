import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Fotter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>,
)
