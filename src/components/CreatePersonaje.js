import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/style.css'

const endpoint = 'http://localhost:8000/api/personaje'

const CreatePersonaje = () => {

    const [nombre, setNombre] = useState('')
    const [usuarioId, setUsuarioId] = useState(0)
    const navigate = useNavigate()
    var usuarioLocal = localStorage.getItem('usuario')
    
    useEffect(()=>{
        setUsuarioId(JSON.parse(usuarioLocal).usuario.id)
    }, [])

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    const store = async (event) => {
        event.preventDefault()
        await axios.post(endpoint, {nombre: nombre, usuario_id: usuarioId})
        navigate('/inicio')
    }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <strong className="navbar-brand px-2 text-warning">⚔️LVLUP</strong>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to={'/inicio'} className='nav-link text-white'>Inicio</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={'/show'} className='nav-link text-white'>Personajes</Link>
                        </li>
                        <li className="nav-item active">
                            <Link to={`/showone/${JSON.parse(usuarioLocal).usuario.id}`} className='nav-link text-white'>Mis personajes</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-end">
                    <p className="text-white m-3">Bienvenido amig@ {JSON.parse(usuarioLocal).usuario.nusuario}!</p>
                    <button onClick={logout} className="btn btn-warning m-2">Cerrar sesión</button>
                </div>
            </nav>
        <div className="d-flex  justify-content-center">
        <form className="col-6 mt-5 p-5" onSubmit={store}>
            <h2 className="mt-3 mb-5 text-dark">Crear Personaje</h2>
            <div className="mb-3">
                <label className='form-label text-dark'><strong>Nombre</strong></label>
                <input value={nombre} onChange={(e) => setNombre(e.target.value)} type='text' className='form-control border border-dark mb-3'/>
                <span className="text-dark">*El nombre debe contener almenos 5 caracteres</span>
            </div>
            <button type='submit' className='btn btn-warning mb-2 mt-5'>Crear personaje</button>
        </form>
        </div>
    </div>
  )
}

export default CreatePersonaje