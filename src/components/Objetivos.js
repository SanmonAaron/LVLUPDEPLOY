import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/personaje'
const endpoint2 = 'http://localhost:8000/api/nivel'


const Objetivos = () => {
    const [nivel, setNivel] = useState()
    const [fuerza, setFuerza] = useState(5)
    const [destreza, setDestreza] = useState(5)
    const [inteligencia, setInteligencia] = useState(5)
    const navigate = useNavigate()
    const {id} = useParams()
    var usuarioLocal = localStorage.getItem('usuario')

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    const updateNivel = async () => {
        await axios.put(`${endpoint2}/${id}`, {
            nivel: nivel,
            fuerza: fuerza,
            destreza: destreza,
            inteligencia: inteligencia
        })
        console.log(nivel)
        navigate('/inicio')
    }

    useEffect (() => {
        const getPersonajeById = async () => {
           const response = await axios.get(`${endpoint}/${id}`)
           setNivel(response.data.nivel)
           setFuerza(response.data.fuerza)
           setDestreza(response.data.destreza)
           setInteligencia(response.data.inteligencia)
        }
        getPersonajeById()
        // eslint-disable-next-line
    }, [])
    
    
    
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
        <div className="container mt-5">
        <div className="row text-white">
            <div className="col-sm mt-3" id="objetivos">
                <h3 className="mt-4">Objetivo Fuerza</h3>
                <section className="mb-3 mt-5">
                    <li>Realizar 100 flexiones</li>
                    <li>Realizar 100 sentadillas</li>
                    <li>Realizar 100 dominadas</li>
                    <li>Realizar 100 zancadas</li>
                    <li>Realizar 100 abdominales</li>
                </section>
                <div className="mb-5 mt-5">
                    <input type="checkbox" className="form-check-input m-1" id="exampleCheck1" />
                    <label className="form-check-label" forhtml="exampleCheck1">Realizado!</label>
                </div>
            </div>
            <div className="col-sm mt-3" id="objetivos">
                <h3 className="mt-4">Objetivo Destreza</h3>
                <section className="mb-3 mt-5">
                    <li>Correr 30 minutos todos los días</li>
                    <li>Hacer almenos 5 rutinas de agilidad</li>
                    <li>Practicar la resistencia muscular con almenos 3 ejercicios de fuerza</li>
                    <li>Realizar 1 minuto de saltos de diferentes tipos todos los días</li>
                </section>
                <div className="mb-5 mt-4">
                    <input type="checkbox" className="form-check-input m-1" id="exampleCheck1" />
                    <label className="form-check-label" forhtml="exampleCheck1">Realizado!</label>
                </div>
            </div>
            <div className="col-sm mt-3" id="objetivos">
                <h3 className="mt-4">Objetivo Inteligencia</h3>
                <section className="mb-3 mt-5">
                    <li>Estudiar 30 minutos todos los día algo relacionado con tu profesión</li>
                    <li>Investigar sobre almenos 2 temas más que no estén relacionados</li>
                    <li>Investigar almenos 30 minutos al día sobre cultura general</li>
                </section>
                <div className="mb-5 mt-4">
                    <input type="checkbox" className="form-check-input m-1 " id="exampleCheck1" />
                    <label className="form-check-label" forhtml="exampleCheck1">Realizado!</label>
                </div>
            </div>
        </div>
        </div>
        <div className="mt-5">
            <strong  className="p-4 text-white" id="objetivos">Estos desafíos se realizan durante una semana, si no se consiguen en una semana se tendrá que volver a empezar, mucha suerte jugador!</strong>
        </div>
        <button onClick={updateNivel} className="btn btn-warning mt-5">Subir de nivel</button>
    </div>
  )
}

export default Objetivos