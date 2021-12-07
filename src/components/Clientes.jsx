import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import Footer from './Footer'
import "./footer.css"

function Clientes() {
    
    const [nombres, setNombre] = useState('')
    const [apellidos, setApellido] = useState('')
    const [cedula, setCedula] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')

    

    const registrar = async(e)=>{

        e.preventDefault();
        const cliente = {nombres, apellidos, cedula, direccion, telefono, correo, contrasena}

        const respuesta = await Axios.post('/cliente/crear', cliente)
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

                Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 2500
                
          })
          
          window.location.href="/pedidos"
            
             

        }

            


    }

            


    return (
    <div className="container">
        <div className="container mr-auto my-2">
            <h2>Clientes</h2>
        </div>
        <div className="container-flex">
        <img  className="img-fluid"  src="cliente.jpg" alt="" />
        </div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card card border-dark">
                        <div className="container text-center fa-3x">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <div className="card-header text-center">
                            <h4>Registrarse</h4>
                        </div>
                        <div className="card-body ">
                            <form onSubmit={registrar}>
                            <div className="form-group">
                                    <label>Nombres</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    autoFocus
                                    required
                                    onChange={(e)=>setNombre(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Apellidos</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setApellido(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Cedula</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setCedula(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Dirección</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setDireccion(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Teléfono</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setTelefono(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Correo</label>
                                    <input
                                    type="email"
                                    className="form-control"
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
                        <img src="descuento.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cliente preferencial</h5>
                            <p className="card-text">Descuentos especiales a nuestros clientes que se encunetren registrado y tengas pedidos superiores a $200.000 durante el ultimo mes en todos los platos que se soliciten a domicilio de lunes a viernes de 12:00 a 7:00 pm</p>
                            <p className="card-text"><small class="text-muted"></small></p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Promociones fast food</h5>
                            <p className="card-text">Promociones 2 x 1 en comidas rapidas que sean solicitadas a domicilio y por valores superiores a $35.000. No aplica para servico en el restaurante</p>
                            <p className="card-text"><small class="text-muted"></small></p>
                        </div>
                        <img src="descarga.jfif" className="card-img-bottom" alt="..."/>
                        </div>
                </div>
                <div className= "col-md-4">
                        <div className="card mb-3">
                        <img src="eventos.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Atención eventos especiales</h5>
                            <p className="card-text">Servico de baquetes y atención de eventos especiales como bodas, grados y bautizos</p>
                            <p className="card-text"><small class="text-muted"></small></p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Hora feliz</h5>
                            <p className="card-text">Disfrutes de nuestra hora feliz los viernes de 7:00 a 8:00 pm</p>
                            <p className="card-text"><small class="text-muted"></small></p>
                        </div>
                        <img src="happy1.jpg" className="card-img-bottom" alt="..."/>
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

export default Clientes