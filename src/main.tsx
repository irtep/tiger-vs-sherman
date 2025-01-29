import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TVSProvider } from './context/TVScontext.tsx';

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.backgroundColor = 'rgb(16, 81, 22)';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TVSProvider>
      <App />
    </TVSProvider>
  </StrictMode>,
)
