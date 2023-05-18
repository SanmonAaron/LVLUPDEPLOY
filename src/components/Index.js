import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/style.css'

const Index = () => {
    var usuarioLocal = localStorage.getItem('usuario')
    const navigate = useNavigate()
    

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="collapse navbar-collapse">
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
                    <h1 className="mb-3">Menú</h1>
                    <h4 className="mb-3">Mejora tanto en tu vida diaria como con tu personaje</h4>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row align-items-center" id="container-index">
                <div className="col">
                    <div id="columna-cp">
                        <div className="mask2">
                            <h2 className="text-white">Crear personaje</h2>
                            <p className="text-white">Crea tus primeros personajes y empieza tu aventura</p>
                        </div>
                        <Link to={'/create'} className="btn btn-warning">Crear personaje</Link>
                    </div>
                </div>
                <div className="col">
                    <div id="columna-r">
                        <div className="mask2">
                            <h2 className="text-white">Ránking de personajes</h2>
                            <p className="text-white">Compara tus personajes con otros usuarios de todos los paises</p>
                        </div>
                        <Link to={'/show'} className="btn btn-warning">Mostrar ránkings</Link>
                    </div>
                </div>
                <div className="col">
                    <div  id="columna-mp">
                        <div className="mask2">
                            <h2 className="text-white">Mis personajes</h2>
                            <p className="text-white">Observa todos tus personajes, tanto los nuevos como los viejos</p>
                        </div>
                        <Link to={`/showone/${JSON.parse(usuarioLocal).usuario.id}`} className="btn btn-warning">Mis personaje</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index