import React from 'react'

const Inicio = () => {
    return (
        <div className="container text-center">
            <h1>RESTAURANTE EL PALACIO DEL SABOR</h1>
            <div className="container-flex">
                <img  className="img-fluid"  src="comida0.png" alt="" />
            </div>
            <div className="container bg-primary my-2 text-center">
            <h2 className="text-white">Nuestro Menú</h2>
            </div>
            <div className="card-deck">
            <div className="card">
                <img src="comida6.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Comida de mar</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img src="comida7.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Platos típicos</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img src="comida8.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Comida internacional</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>
            <div className="container bg-primary my-2 text-center">
            <h2 className="text-white">Nuestros servicios</h2>
            </div>
            <div className="card-deck">
            <div className="card">
                <img src="OL1.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Servicio 24 horas</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img src="OL2.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Pedidos en línea</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                <img src="OL3.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Pagos electronicos</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            </div>            
        </div>
            
    )
}

export default Inicio
