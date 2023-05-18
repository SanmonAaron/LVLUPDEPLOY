import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import '../css/style.css'

const endpoint = 'http://localhost:8000/api'

const ShowPersonajes = () => {
    const [ usuarios, setUsuarios ] = useState([])
    const [ personajes, setPersonajes ] = useState([])
    const navigate = useNavigate()
    var usuarioLocal = localStorage.getItem('usuario')

    useEffect (() => {
        getAllPersonajes()
        getAllUsuarios()
    },[])

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    const getAllUsuarios = async () =>{
        const response = await axios.get(`${endpoint}/usuarios`)
        setUsuarios(response.data)
    }
    const getAllPersonajes = async () =>{
       const response = await axios.get(`${endpoint}/personajes`)
       setPersonajes(response.data)
    }
    const myuser = (personajeId) => {
        const myusuario = usuarios?.find(usuario => usuario.id === personajeId)
        return myusuario.nusuario

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
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
            <div className="mask mt-3">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    <h1 className="mb-3">Ránking de personajes</h1>
                    <h4 className="mb-3">Aquí podrás ver todos los personajes creados de los usuarios y compararlos con los tuyos</h4>
                  </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row align-items-center">
                {personajes?.map((personaje) => (
                <div className="d-flex justify-content-center container bg-dark col-5 p-5 mb-3" id="personajes" key={personaje.id}>
                    <div className="col-6 row" id="objetivos2">
                        <h4 className="text-warning mt-3 mb-3">{personaje.nombre}</h4>
                        <strong className="text-white mt-3">Fuerza: {personaje.fuerza}</strong>
                        <strong className="text-white">Destreza: {personaje.destreza}</strong>
                        <strong className="text-white">Inteligencia: {personaje.inteligencia}</strong>
                        <strong className="text-warning mb-3 mt-3">Nivel: {personaje.nivel}</strong>
                        <div className="mb-4 mt-2">
                            <img  src="marco1.png" />
                        </div>
                    </div>
                </div>
            ))}
                </div>
            </div>
            
        </div>
    )
  
}

export default ShowPersonajes