import React,{ Fragment } from 'react';
import { BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import CrearCuenta from './paginas/auth/CrearCuenta';
import Login from './paginas/auth/Login';
import Home from './paginas/Home';
import ProductosAdmin from './paginas/productos/ProductosAdmin';
import ProductosCrear from './paginas/productos/ProductosCrear';
import ProductosEditar from './paginas/productos/ProductoEditar';
import InventariosAdmin from './paginas/Inventario/InventarioAdmin';
import InventariosCrear from './paginas/Inventario/InventarioCrear';
import InventariosEditar from './paginas/Inventario/InventarioEditar';



function App() {
  return (
    <div>
      <Fragment>
       <Router>
         <Routes>
           <Route path = "/" exact element={<Login/>}/>
           <Route path = "/crear-cuenta" exact element={<CrearCuenta/>}/>
           <Route path="/home" exact element={<Home/>}/>
           <Route path="/productos-admin" exact element={<ProductosAdmin/>}/>
           <Route path="/productos-crear" exact element={<ProductosCrear/>}/>
           <Route path="/productos-editar/:idproducto" exact element={<ProductosEditar/>}/>
           <Route path="/inventarios-admin" exact element={<InventariosAdmin/>}/>
           <Route path="/inventarios-crear" exact element={<InventariosCrear/>}/>
           <Route path="/inventarios-editar/:idinventario" exact element={<InventariosEditar/>}/>
           


         </Routes>
       </Router>

       </Fragment>





    </div>
  );
}

export default App;
