import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

// pages
import HomePage from './pages/home.tsx'
import ScanterPage from './pages/scanter.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scanter" element={<ScanterPage />} />
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
