import React from 'react'
import Footer from './Footer'
import "./footer.css"

const Menu = ()=> {
    return(
    <div className="container my-2" >
        <div className="container">
            <h2 className="">Menú</h2>
        </div>
        <div className="card-deck">
            <div className="card">
                <img src="comida6.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Comida de mar</h5>
                <ul className="">
                    <li className="">Arroz con camarones</li>
                    <li className="">Langosta gratinada</li>
                    <li className="">Chuleta a la calima</li>
                    <li className="">Langostinos apanados</li>
                </ul>
                <a href="/pedidos" className="btn btn-primary">Realiza tu pedido</a>
                </div>
            </div>
            <div className="card">
                <img src="comida7.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Platos típicos</h5>
                <ul className="">
                    <li className="">Bandeja paisa</li>
                    <li className="">Bandeja montañera</li>
                    <li className="">Arroz con pollo</li>
                    <li className="">Carne encebollada</li>
                </ul>
                <a href="/pedidos" className="btn btn-primary">Realiza tu pedido</a>
                </div>
            </div>
            <div className="card">
                <img src="comida8.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Comida internacional</h5>
                <ul className="">
                    <li className="">Paella</li>
                    <li className="">Sushi</li>
                    <li className="">Caviar</li>
                    <li className="">Rodizio</li>
                </ul>
                <a href="/pedidos" className="btn btn-primary">Realiza tu pedido</a>
                </div>
            </div>
           </div>
           <div class="row row-cols-1 row-cols-md-2 my-2">
            <div class="col mb-4">
                <div class="card">
                <img src="comida0.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src="comida0.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card">
                <img src="comida0.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col mb-4">
                <div class="card">
                <img src="comida0.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

export default Menu