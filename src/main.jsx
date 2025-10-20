import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

createApp(App).mount('#app')

// Correct registration for vite-plugin-pwa:
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
