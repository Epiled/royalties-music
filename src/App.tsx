import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EstilosGlobais from './styles/EstilosGlobais'
import Home from './pages/Home'
import Menu from './components/Menu'
import Teste from './pages/Teste'

const App: React.FC = () => {

  return (
    <Router>
      <EstilosGlobais />
      <Menu />

      {/* Rotas */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/teste' element={<Teste />} />


        {/* Rota de fallback */}
        <Route index path='/404' element={<Home />} />
        <Route index path='*' element={<Home />} />
      </Routes>
      
    </Router>
  )
}

export default App
