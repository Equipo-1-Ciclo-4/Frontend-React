import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Nav from './components/Nav';
import Registro from './components/Registro';
import Menu from './components/Menu';
import Clientes from './components/Clientes';
import Pedidos from './components/Pedidos';
import Datos from './components/Datos';

 
function App() {
  return (
    <Router>
      <Nav/>
      <Route path='/' exact component = {Inicio}/>
      <Route path='/login' exact component = {Login}/>
      <Route path='/registrar' exact component = {Registro}/>
      <Route path='/index' exact component = {Index}/>
      <Route path='/menu' exact component = {Menu}/>
      <Route path= '/clientes' exact component = {Clientes}/>
      <Route path= '/pedidos' exact component = {Pedidos}/>
      <Route path= '/datos' exact component = {Datos}/>
    </Router>
  );
}

export default App;
