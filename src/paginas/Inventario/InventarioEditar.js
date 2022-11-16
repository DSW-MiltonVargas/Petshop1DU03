import React, { useState, useEffect } from 'react';
import ContentHeader from '../../componentes/ContentHeader';
import Footer from '../../componentes/Footer';
import Navbar from '../../componentes/Navbar';
import SidebarContainer from '../../componentes/SidebarContainer';
import { useNavigate, useParams } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke'
import swal from 'sweetalert';

const InventariosEditar = () => {

    const navigate = useNavigate();

    const { idinventario } = useParams();
    let arreglo = idinventario.split('@');
    
    const codigo_productoInventario = arreglo[1];
    const compraInventario = arreglo[2];
    const ventaInventario = arreglo[3];
    const saldoInventario = arreglo[4];
   




    console.log(arreglo);

    const [inventario, setProyecto] = useState({
        codigo_producto: codigo_productoInventario,
        compra: compraInventario,
        venta: ventaInventario,
        saldo: saldoInventario
    

    });

    const { codigo_producto, compra, venta, saldo, } = inventario;

    useEffect(() => {
        document.getElementById("codigo_producto").focus();
    }, [])

    const onChange = (e) => {
        setProyecto({
            ...inventario,
            [e.target.name]: e.target.value
        })
    }

    const editarInventario = async () => {
        let arreglo = idinventario.split('@');
        const idInventario = arreglo[0];
        

        const data = {
            codigo_producto:inventario.codigo_producto,
            compra:inventario.compra,
            venta:inventario.venta,
            saldo:inventario.saldo
          

        }

        const response = await APIInvoke.invokePUT(`/api/inventario/${idInventario}`, data);
        const idInventarioEditado = response._id

        if (idInventarioEditado !== idInventario) {
            const msg = "El inventario no fue editado correctamente.";
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
            const msg = "El inventario fue editado correctamente.";
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
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        editarInventario();
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Creación de Inventarios"}
                    breadCrumb1={"Listado de Inventario"}
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
                                            placeholder="Ingrese el codigo_producto del Inventario"
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
                                            placeholder="Ingrese de la compra "
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
                                            placeholder="Ingrese de la venta"
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
                                            placeholder="Ingrese de la saldo"
                                            value={saldo}
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Editar</button>
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

export default InventariosEditar;