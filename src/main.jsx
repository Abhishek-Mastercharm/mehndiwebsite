import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initDesignSystem } from './design/init'
import './i18n'

initDesignSystem();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
