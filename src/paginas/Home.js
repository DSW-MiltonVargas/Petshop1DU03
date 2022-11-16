import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from '../componentes/ContentHeader';
import Footer from '../componentes/Footer';
import Navbar from '../componentes/Navbar';
import SidebarContainer from '../componentes/SidebarContainer';
import masco1 from "./catalogo/imagen/masco1.jfif";
import masco2 from "./catalogo/imagen/masco2.jfif";
import masco3 from "./catalogo/imagen/masco3.jfif";
import masco4 from "./catalogo/imagen/masco4.jfif";
import masco5 from "./catalogo/imagen/masco5.jfif";
import chuki from "./catalogo/imagen/chuki.png";
import ringo from "./catalogo/imagen/ringo2k.png";
import felix from "./catalogo/imagen/purinafelix.png";
import '../App.css';
const Home = () => {
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"OmegaPetShop"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home"}
                />
                
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Productos</h3>
                                        
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit" />
                                    </div>
                                    <Link to={"/productos-admin"} className="small-box-footer">Ver Productos <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>

                            

                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Inventario</h3>
                                        
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit" />
                                    </div>
                                    <Link to={"/inventarios-admin"} className="small-box-footer">Ver Inventario <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Factura</h3>
                                        
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit" />
                                    </div>
                                    <Link to={"/inventarios-admin"} className="small-box-footer">Ver factura <i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='content'>
                    <div className='row'>
                    <div className="h1">CATALOGO DE PRODUCTOS</div>
                        <div className="container">
                            <div className="caja caja1"><img src={masco1} /><p>Alimento para cachorros</p><p>Precio: $8500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                            <div className="caja caja2"><img src={masco2} /><p>alimento fitnes adultos</p><p>Precio: $9500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                            <div className="caja caja3"><img src={masco3} /><p>Rocku pollo</p><p>Precio: $1500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                            <div className="caja caja4"><img src={masco4} /><p>Purina Ricocat</p><p>Precio: $3500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                            <div className="caja caja5"><img src={masco5} /><p>Alpiste</p><p>Precio: $6500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                            <div className="caja caja6"><img src={chuki} /><p>Disfraz kanino chuki</p><p>Precio: $6500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                            <div className="caja caja7"><img src={ringo} /><p>Ringo croquetas</p><p>Precio: $6500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                            <div className="caja caja8"><img src={felix} /><p>alimento liquido felix</p><p>Precio: $6500</p><button  class="button button1">AGREGAR AL CARRITO</button></div>
                        </div>



                    </div>



                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;