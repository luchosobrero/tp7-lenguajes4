import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Navbar';
import Inicio from './assets/Inicio';
import ProyectoBlob from './assets/ProyectoBlob';
import Acerca from './assets/Acerca';
import Contacto from './assets/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/proyectoBlob" element={<ProyectoBlob />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;