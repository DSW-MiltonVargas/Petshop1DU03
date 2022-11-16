import React, { useState, useEffect } from 'react';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import { useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';

const InventariosCrear = () => {

    const navigate = useNavigate();

    const [inventario, setInventario] = useState({
        codigo_producto: '',
        compra: '',
        venta:'',
        saldo:''
     
    });

    const {codigo_producto, compra, venta , saldo,} = inventario;

    useEffect(() => {
        document.getElementById("codigo_producto").focus();
    }, [])

    const onChange = (e) => {
        setInventario({
            ...inventario,
            [e.target.name]: e.target.value
        })
    }

    const crearInventario = async () => {
        const data = {
            codigo_producto: inventario.codigo_producto,
            compra :inventario.compra,
            venta :inventario.venta ,
            saldo:inventario.saldo
            
            
        }

        const response = await APIInvoke.invokePOST(`/api/inventario`, data);
        const idInventario = response._id;

        if (idInventario === '') {
            const msg = "El inventario NO fue creado correctamente.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            navigate("/inventarios-admin");
            const msg = "El inventario fue creado correctamente.";
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });

            setInventario({
                codigo_producto: '',
                compra: '',
                venta:'',
                saldo: ''
               
             })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearInventario();
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Creación de Inventarios"}
                    breadCrumb1={"Listado de Inventario "}
                    breadCrumb2={"Creación"}
                    ruta1={"/inventarios-admin"}
                />

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">

                            <form onSubmit={onSubmit}>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">codigo_producto</label>
                                        <input type="text"
                                            className="form-control"
                                            id="codigo_producto"
                                            name="codigo_producto"
                                            placeholder="Ingrese el codigo_producto del inventario"
                                            value={codigo_producto}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">compra</label>
                                        <input type="number"
                                            className="form-control"
                                            id="compra"
                                            name="compra"
                                            placeholder="Ingrese la compra del inventario"
                                            value={compra}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">venta</label>
                                        <input type="number"
                                            className="form-control"
                                            id="venta"
                                            name="venta"
                                            placeholder="Ingrese la venta del inventario"
                                            value={venta}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">saldo</label>
                                        <input type="number"
                                            className="form-control"
                                            id="saldo"
                                            name="saldo"
                                            placeholder="Ingrese el saldo del inventario"
                                            value={saldo}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Crear</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default InventariosCrear;