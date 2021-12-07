//import React from 'react'
import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Footer from './Footer'
import "./footer.css"

const Pedidos = ()=> {

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

    const Login = async(e)=>{

        e.preventDefault();
        const usuario = {correo, contrasena}

        const respuesta = await Axios.post('/jefe/login', usuario)
        const mensaje = respuesta.data.mensaje

        if(mensaje!=='Bienvenido'){

            Swal.fire({
                icon:'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }

        else{

            const token = respuesta.data.token
            const nombre = respuesta.data.nombre
            const idusuario = respuesta.data.id

            sessionStorage.setItem('token', token)
            sessionStorage.setItem('nombre', nombre)
            sessionStorage.setItem('idusuario', idusuario)

            window.location.href="/index"

            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })


        }

    }
    return(
     <div className="container">
        <div className="container mr-auto my-2">
            <h2>Pedidos</h2>
        </div>
        <div className="container-flex">
        <img  className="img-fluid"  src="pedido3.jpg" alt="" />
        </div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="container text-center fa-3x">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="card-header text-center">
                            <h4>Inicio de sesion</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={Login}>
                                <div className="form-group">
                                    <label>Correo</label>
                                    <input
                                    type="email"
                                    className="form-control"
                                    autoFocus
                                    required
                                    onChange={(e)=>setCorreo(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div>
                                    <label>Contraseña</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setContrasena(e.target.value)}
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-3"
                                                                
                                
                                />
                                

                            </form>
                            
                        </div>
                    </div>
                    
                </div>
                <div className= "col-md-4">
                        <div className="card mb-3">
                        <img src="pago.jfif" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Pago electrónico</h5>
                            <p className="card-text">Pague sus pedidos con tarjetas débito, crédito o PSE. Tambien se aceptan pago por transferencia bancaria o Nequi. Contamos con servicio de datáfono inhalambrico</p>
                            <p className="card-text"><small class="text-muted"></small></p>
                        </div>
                        </div> a la puerta de su casa.
                        
                </div>
                <div className= "col-md-4">
                        <div className="card mb-3">
                        <img src="online.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Pedidos Online</h5>
                            <p className="card-text">Realice sus pedidos sin moverse de su casa u oficina. Pedidos a traves de nuestra página web</p>
                            <p className="card-text"><small class="text-muted"></small></p>
                        </div>
                        </div>
                        
                </div>
                
            </div>
            
        </div>
        <div className="container text-center">
          <Footer/>
        </div>
     </div>
    )
}

export default Pedidos