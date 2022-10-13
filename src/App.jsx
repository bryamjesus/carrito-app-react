import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EjemploPage from './pages/EjemploPage';
import './App.css'
import EjemploListaPage from './pages/EjemploListaPage';
import EjemploVariablePage from './pages/EjemploVariablePage';
import PrincipalPage from './pages/PrincipalPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/ejemplo/variables' element={<EjemploVariablePage />} />
        <Route path='/ejemplo/lista' element={<EjemploListaPage />} />
        <Route path='/ejemplo' element={<EjemploPage />} />
        <Route path='/' element={<PrincipalPage />} />
      </Routes>
    </Router>
  )
}

export default App
