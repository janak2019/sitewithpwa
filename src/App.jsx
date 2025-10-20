import React from 'react'

const App = () => {
  // Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('✅ Service Worker Registered'))
    .catch(err => console.log('❌ Service Worker Error:', err));
}

function notify() {
  alert('Hello! Your PWA is running like a native app 🎉');
}

  return (
    <>
    <h1>Hello All</h1>
    <p>Hello</p>
    </>
  )
}

export default App