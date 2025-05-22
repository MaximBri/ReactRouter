import { HashRouter } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import './styles/reset.scss'
import './styles/App.scss'

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
