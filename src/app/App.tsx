import { HashRouter } from 'react-router-dom'

import ErrorBoundary from './error-boundary/ErrorBoundary'
import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './context/AuthProvider'
import './styles/reset.scss'
import './styles/App.scss'

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => console.log('Service Worker registered', reg))
      .catch((err) => console.log('Service Worker not registered', err))
  }

  return (
    <HashRouter>
      <ErrorBoundary>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ErrorBoundary>
    </HashRouter>
  )
}

export default App
