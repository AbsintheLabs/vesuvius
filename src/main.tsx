import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css'

AOS.init({
  duration: 1000,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
