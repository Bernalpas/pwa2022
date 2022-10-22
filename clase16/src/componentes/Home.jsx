import { Link } from "react-router-dom";

function Home() {
    return (
      <>
        <main>
          <h2>Bienvenidos a la Página Principal </h2>
          <p>Ejemplo de las Rutas en React!</p>
        </main>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }

  export default Home;