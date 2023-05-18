import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/style.css'

const endpoint = 'http://localhost:8000/api/login'

const Login = () => {
    const [nusuario, setNusuario] = useState("")
    const [contraseña, setContraseña] = useState("")
    const navigate = useNavigate()

    const loginHandler = (e) => {
        e.preventDefault();
        if (nusuario.length > 0 && contraseña.length > 0) {
            axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
                axios
                    .post(endpoint, {
                        nusuario: nusuario,
                        contraseña: contraseña,
                    })
                    .then((response) => {
                        localStorage.setItem('usuario', JSON.stringify(response.data))
                        navigate('/inicio')
                    })
                    .catch(function (error) {
                        console.error(error);
                        alert('¡Usuario o contraseña incorrectos!')
                    });
            });
        }else{
            alert('No has introducido ningún valor  -.-')
        }
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
                <strong className="navbar-brand px-2 text-warning">⚔️LVLUP</strong>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
            </div>
        </nav>
        <div className="d-flex  justify-content-center">
        <form className="col-6 mt-5 p-5 bg-dark" onSubmit={loginHandler}>
            <h2 className="mt-3 mb-5 text-dark">Iniciar sesión</h2>
            <div className="form-outline mb-3">
                <label className="form-label text-dark" forhtml="form1Example1"><strong>Nombre de usuario</strong></label>
                <input value={nusuario} onChange={(e) => setNusuario(e.target.value)} type="text" id="form1Example1" className="form-control border border-dark"/>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label text-dark" forhtml="form1Example2"><strong>Contraseña</strong></label>
                <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} type="password" id="form1Example2" className="form-control border border-dark"/>
            </div>
            <button type="submit" className="btn btn-warning btn-block  mb-2 mt-3">Iniciar sesión</button>
            <div>
                <Link to={'/register'} className='btn btn-warning mt-3'>Registrarse</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login