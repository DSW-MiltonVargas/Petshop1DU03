import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import APIInvoke from '../../utils/APIInvoke';
import swal from 'sweetalert';
//import cachorro from '../imagenes/cachorro.jpg'
const Login = () => {

    //para redireccionar de un componente a otro
    const navigate = useNavigate();

    //definimos el estado inicial de las variables
    const [usuario, setUsuario] = useState({
        correo: '',
        contraseña: ''
    });

    const { correo, contraseña } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const iniciarSesion = async () => {
        if (contraseña.length < 6) {
            const msg = "La contraseña debe ser al menos de 6 caracteres.";
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
            const data = {
                correo: usuario.correo,
                contraseña: usuario.contraseña
            }
            const response = await APIInvoke.invokePOST(`/api/auth`, data);
            const mensaje = response.msg;

            if (mensaje === 'El usuario no existe' || mensaje === 'Contraseña incorrecta') {
                const msg = "No fue posible iniciar la sesión verifique los datos ingresados.";
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
                //obtenemos el token de acceso jwt
                const jwt = response.token;

                //guardamos el token en el localstorage
                localStorage.setItem('token', jwt);

                //redireccionamos al home la pagina principal
                navigate("/home");
            }
        }
    }


    const onSubmit = (e) => {
        e.preventDefault();
        iniciarSesion();
    }



    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo" >
                    <Link to={"#"}><b>Iniciar</b> Sesión</Link>
                </div>

                <div className="card">
                    <div className="card-body login-card-body">
                        
                          
                        <p className="login-box-msg" >Bienvenidos</p>
                        <form onSubmit={onSubmit}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo electronico"
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
                                    placeholder="Ingrese su Contraseña"
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

                            <div className="social-auth-links text-center mb-3">

                                <button type="submit" className="btn btn-block btn-primary">
                                    Ingresar
                                </button>
                                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                                    Crear cuenta
                                </Link>
                            </div>

                        </form>


                    </div>

                </div>
            </div>
        </div>

    );
}

export default Login;