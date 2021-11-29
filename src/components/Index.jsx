import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import Swal from 'sweetalert2'

function Index() {

    const [empleados, setEmpleados] = useState([])
    const [nombres, setNombres]=useState('')
    const [apellidos, setApellidos]=useState('')
    const [identificacion, setIndetificacion]=useState('')
    const [puesto, setPuesto]=useState('')
    const [tcontrato, setTcontrato]=useState(["Fijo","Indefinido","Horas"])
    const [contartoSelect, setContratoSelect] = useState('')

    
    useEffect(() => {

        obtenerEmpleados()
        
    }, [])

    const obtenerEmpleados = async()=>{

        const id = sessionStorage.getItem('idusuario')
        const token = sessionStorage.getItem('token')

        const respuesta = await Axios.get('/empleado/listarEmpleadosJefe'+id,
        
        {
            headers: {'autorizacion': token}
        })

        setEmpleados(respuesta.data)
    }

    return (
        <div>
            <header className="py-2 bg-primary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className="fas fa-pencil-alt"></i>Empleados</h1>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="navbar py-4">
                <div className="container">
                    <div className="col-md-3">
                        <Link to="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addEmpleado">
                        <i className="fas fa-plus"></i>
                        Add Empleado
                        </Link> 
                    </div>

                    <div className="col-md-6 ml-auto">
                        <div className="input-group">
                            <input className="form-control mr-sm-2" type="search" placeholder="Buscar...." aria-label="Search"/>
                        </div>
                    </div>
                </div>
            </nav>
            {/*MOSTRAT EMPLEADOS */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Empleados de {sessionStorage.getItem('nombre')}</h4>
                                </div>

                                <table className="table table-responsive-lg table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">NOMBRES</th>
                                            <th scope="col">APELLIDOS</th>
                                            <th scope="col">IDENTIFICACION</th>
                                            <th scope="col">TIPO DE CONTRATO</th>
                                            <th scope="col">OPCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            empleados.map((empleado,i)=>(
                                                <tr key={empleado._id}>
                                                    <td>{i+1}</td>
                                                    <td>{empleado.nombres}</td>
                                                    <td>{empleado.apellidos}</td>
                                                    <td>{empleado.identificacion}</td>
                                                    <td>{empleado.tcontrato}</td>
                                                    <td>
                                                        <Link className="btn btn-warning mr-1" to={'/editar/'+empleado.id}>Editar</Link>
                                                        <button className="btn btn-danger mr-1" >Eliminar</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*MODAL*/}
            <div className="modal fade" id="addEmpleado">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h4 className="modal-title">Add empleados</h4>
                            <button className="close" data-dismiss="modal">
                                <span>&times</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Nombres</label>
                                    <input type="text" className="form-control required" onChange={(e)=> setNombres(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Apellidos</label>
                                    <input type="text" className="form-control required" onChange={(e)=> setApellidos(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Identificación</label>
                                    <input type="text" className="form-control required" onChange={(e)=> setIndetificacion(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Puesto</label>
                                    <input type="text" className="form-control required" onChange={(e)=> setPuesto(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label>Tipo de contrato</label>
                                    <select className="form-group" onChange={(e)=> setContratoSelect(e.target.value)}>
                                        {
                                            tcontrato.map(tcontrato=>(
                                                <option key={tcontrato}>
                                                    {tcontrato}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Guardar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
