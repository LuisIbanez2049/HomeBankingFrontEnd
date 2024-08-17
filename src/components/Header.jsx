import React from 'react'
import "./Header.css"
import Nav from './Nav'
function Header(props) {
  return (
    <header>
        <div id="contenedorLogo-Botones-LogoSalida" className="w-full h-[160px] flex flex-row justify-between  rounded-b-[50px] bg-white">
            <div className="contenedor-logo">
              <a className="block" href=""><img id="logo" className="w-[150px] block ml-[30px]" src="https://assets.mobile.playdigital.com.ar/images/banks/santaFe.png" alt="logo" /></a>
            </div>

            <div id="contenedor-botones">
              {/* <Nav/> */}
              {props.children}
            </div>

            <div className="contenedor-logoSalida">
              <a className="block" href=""><img className="w-[100px] mt-[26px] block mr-[20px]" src="https://www.pngkey.com/png/full/400-4009588_png-file-svg-log-out-icon-png.png" alt="" /></a>
            </div>
        </div>
  
    </header>
  )
}

export default Header