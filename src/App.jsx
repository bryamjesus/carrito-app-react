import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EjemploPage from './pages/EjemploPage';
import './App.css'
import EjemploListaPage from './pages/EjemploListaPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/ejemplo/lista' element={<EjemploListaPage />} />
        <Route path='/ejemplo' element={<EjemploPage />} />
        <Route path='/' element={<h1>Página principal</h1>} />
      </Routes>
    </Router>
  )
}

export default App
