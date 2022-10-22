import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from './componentes/Main';
import Botones from './componentes/botones';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/botones" element={<Botones />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );


}

export default App;
