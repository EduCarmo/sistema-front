import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import MeusDados from './pages/MeusDados';
import Pagamentos from './pages/Pagamentos';
import Entradas from './pages/Entradas';
import Saidas from './pages/Saidas';
import Relatorios from './pages/Relatorios';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meus-dados" element={<MeusDados />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/entradas" element={<Entradas />} />
        <Route path="/saidas" element={<Saidas />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Routes>
    </Router>
  );
}

export default App;
