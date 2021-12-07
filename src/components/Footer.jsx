import React from "react";
import logo1 from './logo1.png'
import logo2 from './logo2.jpg'
import logo3 from './logo3.png'
import "./footer.css";


function Footer() {
  return (
    <div className="main-footer">
      <div className='container ' >
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>Contacto</h2>
            <h3 className="datos-footer">
            <h4>Telefono :3113901617</h4>
            <h4>www.PalaciodelSabor.com</h4>
            <h4>E-mail : PalaciodelSabor@gmail.com</h4>
            <h4>Dirección : calle 3B# 16A-83 los Sauces</h4>
              

            </h3>
          </div>
          {/* Column2 */}
          <div className="col">
           <h3>Siguenos en </h3>
                  
            <img src={logo1} className="App-logo1 " alt='logo1' />
            <img src={logo2} className="App-logo1" alt='logo2' />
            <img src={logo3} className="App-logo1" alt='logo3' />
           
            
            
            
           
          </div>
          
        </div>
         <hr />
          <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} derechos de Autor Grupo 28 Equipo 1 MinTic  UTP
           
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;