import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/style.css'

const endpoint = 'http://localhost:8000/api/register'

const Register = () => {
    const [nusuario, setNusuario] = useState('')
    const [contraseña, setContraseña] = useState('')
    const navigate = useNavigate()

    const store = async (event) => {
        event.preventDefault()
        await axios.post(endpoint, {nusuario: nusuario, contraseña:contraseña})
        navigate('/')
    }
    var usuario = localStorage.getItem('usuario');
    
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
        <form className="col-6 mt-5 p-5 bg-dark m-5" onSubmit={store}>
            <h2 className="mt-3 mb-5 text-dark">Crear cuenta</h2>
            <div className="mb-3">
                <label className='form-label text-dark'><strong>Nombre de usuario</strong></label>
                <input value={nusuario} onChange={(e) => setNusuario(e.target.value)} type='text' className='form-control border border-dark mb-3'/>
                <span className="text-dark">*El nombre de usuario debe contener almenos 5 caracteres y debe ser único</span>
            </div>
            <div className="mb-4">
                <label className='form-label text-dark'><strong>Contraseña</strong></label>
                <input value={contraseña} onChange={(e) => setContraseña(e.target.value)} type='password' className='form-control border border-dark mb-3' />
                <span className="text-dark">*La contraseña debe tener mínimo 10 caracteres</span>
            </div>
            <button type='submit' className='btn btn-warning mb-2 mt-3'>Crear cuenta</button>
            <div>
                <Link to={'/'} className='btn btn-warning mt-3'>Iniciar sesión</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Register