import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

// Es mi contenedor principal que va a renderizar las diferentes vistas de mi aplicacion 
// Donde el header y el footer se mantienen constantes, es decir,  se renderiza una sola vez
// Mientras que el contenido principal que se renderiza cambia segun la ruta seleccionada 
function MainLayout() {
  return (
    <div>
        <Header>
            <Nav/>
        </Header>

          {/* Outlet va a renderizar el contenido de las vistas que tenga de mi pagina dependiendo de de la ruta que le pase por url
          De esta forma solo se renderiza el contenido de cada vista sin la necesidad de renderizar el header y el footer de nuevo */}
          <Outlet/>

        <Footer/>
    </div>
  )
}

export default MainLayout