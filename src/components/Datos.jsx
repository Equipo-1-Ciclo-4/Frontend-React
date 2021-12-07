import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'

function Datos (){

    const [menus, setMenu] = useState([])
    const [clientes, setClientes] = useState([])
    const [codigo, setCodigo] = useState('')
    const [nombre, setNombre] = useState('')
    const [valor, setValor] = useState('')
    const [especialidad, setEspecialidad] = useState('')

    useEffect(() => {

        obtenerMenu()      
      
        
    }, [])

    useEffect(() => {

        obtenerCliente()      
      
        
    }, [])

    const obtenerMenu = async()=>{
              
        const respuesta = await Axios.get('/menu/listarMenu')
             
        setMenu(respuesta.data)
    }

    const obtenerCliente = async()=>{
              
        const respuesta = await Axios.get('/cliente/listarClientes')
             
        setClientes(respuesta.data)
    }
    
    const registrar = async(e)=>{

        e.preventDefault();
        const menu = {codigo, nombre, valor, especialidad}

        const respuesta = await Axios.post('/menu/crear', menu)
        const mensaje = respuesta.data.mensaje

        if(mensaje!=='Plato creado'){

                Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 2500
                
            })


        }

        else{
                Swal.fire({
                icon:'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
        }

    }
 
 
  return (
  
            
    <div className="container">
        <header className="container py-2 bg-primary text-white mt-2 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className="fas fa-edit alt"></i> Menú</h1>
                        </div>
                    </div>
                </div>
            </header>
        <div className="row">
          <div className="col-3 my-2">
                    <div className="card card border-dark">
                        <div className="container text-center fa-3x">
                            <i className="fas fa-coffee"></i>
                        </div>
                        <div className="card-header text-center">
                            <h4>Añadir platos</h4>
                        </div>
                        <div className="card-body ">
                            <form onSubmit={registrar}>
                            <div className="form-group">
                                    <label>Código</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    autoFocus
                                    required
                                    onChange={(e)=>setCodigo(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setNombre(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Valor</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setValor(e.target.value)}
                                                                     
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Especialidad</label>
                                    <input
                                    type="texto"
                                    className="form-control"
                                    required
                                    onChange={(e)=>setEspecialidad(e.target.value)}
                                                                     
                                    />
                                </div>
                                
                               <button type="submit" className="my-1 form-control btn btn-primary">Guardar</button>
                           

                            </form>
                        </div>
                    </div>
                    
                </div>
                <div className="col-9">
                    <table className="table table-responsive-lg table-striped my-2">
                        <thead className = "thead-dark">
                            <tr>
                              <th scope="col">Código plato</th>
                              <th scope="col">Nombre Plato</th>
                              <th scope="col">Valor</th>
                              <th scope="col">Especialidad</th>
                              <th scope="col">OPCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          menus.map((menu,i)=>(
                            <tr key={menu._id}>
                            <td>{menu.codigo}</td>
                            <td>{menu.nombre}</td>
                            <td>{menu.valor}</td>
                            <td>{menu.especialidad}</td>
                            <td>
                                <button className="btn btn-warning mr-1 fas fa-edit" ></button>
                                <button className="btn btn-danger mr-1 fas fa-trash"></button>
                            </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            <div className="container">
            <header className="container py-2 bg-primary text-white mt-2 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1><i className="far fa-address-card alt"></i> Clientes</h1>
                            </div>
                        </div>
                    </div>
            </header>
            <table className="table table-responsive-lg table-striped my-2" >
              <thead className = "thead-dark">
                <tr>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Cedula</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Email</th>
                    <th scope="col">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      clientes.map((cliente,i)=>(
                            <tr key={cliente._id}>
                            <td>{cliente.nombres}</td>
                            <td>{cliente.apellidos}</td>
                            <td>{cliente.cedula}</td>
                            <td>{cliente.direccion}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.correo}</td>
                            <td>
                                <button className="btn btn-warning mr-1 fas fa-edit" ></button>
                                <button className="btn btn-danger mr-1 fas fa-trash"></button>
                            </td>
                            </tr>
                            ))
                        }
                        </tbody>
            </table>
        </div>
        </div>
        
    </div>
             
    
        
                                
    )
                    
}




export default Datos
