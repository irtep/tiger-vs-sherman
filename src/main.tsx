import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.backgroundColor = 'rgb(172, 116, 12)';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
