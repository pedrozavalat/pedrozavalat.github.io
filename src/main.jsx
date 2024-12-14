import React from 'react'
import Routing from './Route.jsx'
import ReactDOM from 'react-dom/client'
import { LoadingProvider } from './pages/Loading/LoadingContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoadingProvider>
      <Routing />
    </LoadingProvider>
  </React.StrictMode>,
)
