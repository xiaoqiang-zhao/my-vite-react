import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import './index.css'

function About() {
  return <h3>About</h3>
}

function Inbox() {
  return <h3>Inbox</h3>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About/>} />
        <Route path="/inbox" element={<Inbox/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
