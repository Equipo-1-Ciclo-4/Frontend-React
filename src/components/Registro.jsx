import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

function Registro() {
    
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
                timer: 1500
            })


        }

    }




    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card card border-dark">
                        <div className="container text-center fa-2x">
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
                                    <label>Direcci??n</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setDireccion(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tel??fono</label>
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
                                    <label>Contrase??a</label>
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

            </div>
            
        </div>
    )
}

export default Registro
