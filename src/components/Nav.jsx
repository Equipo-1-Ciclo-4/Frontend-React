import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {

    const salir = ()=>{

        sessionStorage.clear();
        window.location.href='/'

    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ml-4 mr-4 mt-2">
        <div className="container">
            <Link className="navbar-brand" to="/">Inicio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/menu"><i className=""></i> Menú</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/clientes"><i className=""></i> Clientes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pedidos"><i className=""></i> Pedidos</Link>
                    </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"><i className="fas fa-user"></i> Ingresar</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link" onClick={()=> salir()} to="/"><i className="fas fa-user-times"></i> Salir</Link>
                    </li>
                    </ul>                                 
                </div>
           </div>
        </nav>
            
        
    )
}

export default Nav
