import { Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import Main from "./components/Main";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <>
      <Navegacion />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
    </>
  );
}

export default App;
