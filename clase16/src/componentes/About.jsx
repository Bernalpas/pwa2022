import { Link } from "react-router-dom";


function About() {
    return (
      <>
        <main>
          <h2>Soy el Componente About</h2>
          <p>
            Buenas tardes!!
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

  export default About;