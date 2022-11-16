import React, { useState, useEffect } from 'react';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import { useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';

const ProductosCrear = () => {

    const navigate = useNavigate();

    const [producto, setProducto] = useState({
        nombre: '',
        categoria: '',
        presentacion:'',
        cantidad: '',
        precio_venta: ''
    });

    const { nombre, categoria, presentacion, cantidad, precio_venta  } = producto;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const onChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const crearProducto = async () => {
        const data = {
            nombre: producto.nombre,
            categoria: producto.categoria,
            presentacion: producto.presentacion,
            cantidad: producto.cantidad,
            precio_venta: producto.precio_venta

        }

        const response = await APIInvoke.invokePOST(`/api/productos`, data);
        const idProducto = response._id;

        if (idProducto === '') {
            const msg = "El producto NO fue creado correctamente.";
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
            navigate("/productos-admin");
            const msg = "El producto fue creado correctamente.";
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

            setProducto({
                nombre: '',
                categoria: '',
                presentacion:'',
                cantidad: '',
                precio_venta: ''
             })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearProducto();
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Creación de Productos"}
                    breadCrumb1={"Listado de Producto"}
                    breadCrumb2={"Creación"}
                    ruta1={"/productos-admin"}
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
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text"
                                            className="form-control"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Ingrese el nombre del producto"
                                            value={nombre}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Categoria</label>
                                        <input type="text"
                                            className="form-control"
                                            id="categoria"
                                            name="categoria"
                                            placeholder="Ingrese de la categoria"
                                            value={categoria}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Presentación</label>
                                        <input type="text"
                                            className="form-control"
                                            id="presentacion"
                                            name="presentacion"
                                            placeholder="Ingrese de la presentacion"
                                            value={presentacion}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Cantidad</label>
                                        <input type="number"
                                            className="form-control"
                                            id="cantidad"
                                            name="cantidad"
                                            placeholder="Ingrese de la cantidad"
                                            value={cantidad}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Precio de venta</label>
                                        <input type="number"
                                            className="form-control"
                                            id="precio_venta"
                                            name="precio_venta"
                                            placeholder="precio  de venta"
                                            value={precio_venta}
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

export default ProductosCrear;