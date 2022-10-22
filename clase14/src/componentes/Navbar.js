
import React, { Component } from 'react';
import './Navbar.css';


let nombre = 'Pepe';



class Navbar extends Component {
    render(){
        return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://frba.utn.edu.ar/theme/utnba/login.php" rel="noreferrer" target="_blank">{nombre}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" rel="noreferrer" target="_blank" aria-current="page" href="https://frba.utn.edu.ar/theme/utnba/login.php">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" rel="noreferrer" target="_blank" href="https://frba.utn.edu.ar/theme/utnba/login.php">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" rel="noreferrer" target="_blank" href="https://frba.utn.edu.ar/theme/utnba/login.php" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" rel="noreferrer" target="_blank" href="https://frba.utn.edu.ar/theme/utnba/login.php">Action</a></li>
                        <li><a className="dropdown-item" rel="noreferrer" target="_blank" href="https://frba.utn.edu.ar/theme/utnba/login.php">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" rel="noreferrer" target="_blank" href="https://frba.utn.edu.ar/theme/utnba/login.php">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        )
    }
}

export default Navbar;