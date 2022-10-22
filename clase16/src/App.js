import { Routes, Route } from "react-router-dom";
import Home from './componentes/Home';
import About from './componentes/About';
import './App.css';
import Navegacion from "./componentes/Navbar";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <div className="App">
      <Navegacion />
      <h1 class="m-5">React Router DOM</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="formulario" element={<Formulario />} />
      </Routes>
    </div>
  );
}

export default App;
