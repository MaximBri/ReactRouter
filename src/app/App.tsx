import { HashRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import './styles/reset.scss'
import './styles/App.scss'
import { AuthProvider } from './context/AuthProvider'

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </HashRouter>
  )
}

export default App
