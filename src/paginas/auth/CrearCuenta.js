import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';

const CrearCuenta = () => {

    const [usuario, setUsuario] = useState({

        nombre_completo: '',
        numero_identificacion: '',
        telefono: '',
        correo: '',
        contraseña: '',
        confirmar: '',
        nombre_mascota: '',
        tipo_mascota: '',
        raza: ''



    });

    const { nombre_completo, numero_identificacion, telefono, correo, contraseña, confirmar, nombre_mascota, tipo_mascota, raza } = usuario;

    const onChange = (e) => {

        setUsuario({

            ...usuario,
            [e.target.name]: e.target.value


        });


    };

    const crearCuenta = async () => {

        if (contraseña !== confirmar) {

            const msg = "la contraseñas no coinciden";
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
        }else if (contraseña.length < 6) {
            const msg = "La contraseña deber ser al menos de 6 caracteres.";
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

        }else {
            const data = {
                nombre_completo: usuario.nombre_completo,
                numero_identificacion: usuario.numero_identificacion,
                telefono: usuario.telefono,
                correo: usuario.correo,
                contraseña: usuario.contraseña,
                nombre_mascota: usuario.nombre_mascota,
                tipo_mascota: usuario.tipo_mascota,
                raza: usuario.raza

            }
            const response = await APIInvoke.invokePOST(`/api/usuario`, data);
            console.log(response);
            const mensaje = response.msg;
            if (mensaje === 'El usuario ya existe') {
                const msg = "El usuario ya existe.";
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
         
            }else {
                //console.log("Creado exitosamente")
                const msg = "Creado exitosamente.";
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

    };

    // fin funcion asincronica 
    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    };


    //useEffect(()=>{

    //document.getElementById('nombre').focus();


    //})
    return (

        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <Link to={"#"}><b>Crear</b> &hearts;Petlover&hearts;</Link>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Ingrese sus Datos</p>
                        <form onSubmit={onSubmit}>

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="nombre completo"
                                    id='nombre_completo'
                                    name='nombre_completo'
                                    value={nombre_completo}
                                    onChange={onChange}
                                    required

                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="ingrese su nuemro de documentos"
                                    id='numero_identificacion'
                                    name='numero_identificacion'
                                    value={numero_identificacion}
                                    onChange={onChange}
                                    required

                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="ingrese su numero celular"
                                    id='telefono'
                                    name='telefono'
                                    value={telefono}
                                    onChange={onChange}
                                    required

                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="correo electronico"
                                    id='correo'
                                    name='correo'
                                    value={correo}
                                    onChange={onChange}
                                    required

                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>

                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    id='contraseña'
                                    name='contraseña'
                                    value={contraseña}
                                    onChange={onChange}
                                    required
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {/* confirmar contraseña*/}
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder=" Confirmar Contraseña"
                                    id='confirmar'
                                    name='confirmar'
                                    value={confirmar}
                                    onChange={onChange}
                                    required
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=" nombre mascota"
                                    id='nombre_mascota'
                                    name='nombre_mascota'
                                    value={nombre_mascota}
                                    onChange={onChange}
                                    required
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="tipos mascota: ejemplo loro, perro, gato"
                                    id='tipo_mascota'
                                    name='tipo_mascota'
                                    value={tipo_mascota}
                                    onChange={onChange}
                                    required
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder=" ingresa la raza "
                                    id='raza'
                                    name='raza'
                                    value={raza}
                                    onChange={onChange}
                                    required
                                />

                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            {/* confirmar contraseña*/}
                            <div className="social-auth-links text-center mb-3">

                                <button type="submit" className="btn btn-block btn-primary">
                                    Crear Cuenta
                                </button>
                                <Link to={"/"} className="btn btn-block btn-danger">
                                    Regresar al login
                                </Link>
                            </div>

                        </form>


                    </div>

                </div>
            </div>
        </div>

    );
}

export default CrearCuenta;