import React, {useState} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'


function Login() {

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

            window.location.href="/datos"

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

export default Login
