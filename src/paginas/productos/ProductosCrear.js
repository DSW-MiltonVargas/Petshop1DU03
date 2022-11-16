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
        categoria: '',
        nombre_producto: '',
        marca:'',
        precio: '',
        cantidad: '',
        estado:'',
        presentacion:'',
        descripcion:''
    });

    const {  categoria, nombre_producto,marca,precio,cantidad,estado,presentacion,descripcion  } = producto;

    useEffect(() => {
        document.getElementById("categoria").focus();
    }, [])

    const onChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const crearProducto = async () => {
        const data = {
            categoria: producto.categoria,
            nombre_producto:producto.nombre_producto,
            marca:producto.marca,
            precio: producto.precio,
            cantidad: producto.cantidad,
            estado: producto.estado,
            presentacion: producto.presentacion,
            descripcion:producto.descripcion
            
            

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
                categoria: '',
                nombre_producto: '',
                marca:'',
                precio: '',
                cantidad: '',
                estado:'',
                presentacion:'',
                descripcion:''
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
                                        <label htmlFor="nombre">Categoria</label>
                                        <input type="text"
                                            className="form-control"
                                            id="categoria"
                                            name="categoria"
                                            placeholder="Ingrese la categoria del producto"
                                            value={categoria}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre Producto</label>
                                        <input type="text"
                                            className="form-control"
                                            id="nombre_producto"
                                            name="nombre_producto"
                                            placeholder="Ingrese el nombre del producto"
                                            value={nombre_producto}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Marca</label>
                                        <input type="text"
                                            className="form-control"
                                            id="marca"
                                            name="marca"
                                            placeholder="Ingrese de la marca del producto"
                                            value={marca}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Precio</label>
                                        <input type="number"
                                            className="form-control"
                                            id="precio"
                                            name="precio"
                                            placeholder="Ingrese el precio de venta "
                                            value={precio}
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
                                            placeholder="Ingrese la Cantidad disponible "
                                            value={cantidad}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Estado</label>
                                        <input type="text"
                                            className="form-control"
                                            id="estado"
                                            name="estado"
                                            placeholder="disponible/agotado "
                                            value={estado}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Presentacion</label>
                                        <input type="text"
                                            className="form-control"
                                            id="presentacion"
                                            name="presentacion"
                                            placeholder="ejemplo: bolsa* 2 kilos, caja, frasco "
                                            value={presentacion}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">descripcion</label>
                                        <input type="text"
                                            className="form-control"
                                            id="descripcion"
                                            name="descripcion"
                                            placeholder="Ingrese la descripcion del producto "
                                            value={descripcion}
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