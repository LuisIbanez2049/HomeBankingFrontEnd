import React from 'react'
import "./Header.css"
function Header() {
  return (
    <header>
        <div id="contenedorLogo-Botones-LogoSalida" className="w-full h-[160px] flex flex-row justify-between  rounded-b-[50px] bg-white">
            <div className="contenedor-logo">
              <a className="block" href=""><img id="logo" className="w-[150px] block ml-[30px]" src="https://assets.mobile.playdigital.com.ar/images/banks/santaFe.png" alt="logo" /></a>
            </div>

            <div id="contenedor-botones" className="flex flex-row items-end mb-[10px]">
              <a id="button" className=" text-[30px] font-semibold bg-[white] rounded-[50px] p-2 block w-[190px] h-[73px] text-center mx-8 hover:scale-105 hover:text-white hover:bg-[#009929] hover:font-bold transition-transform duration-300" href="">Accounts</a>
              <a id="button" className=" text-[30px] font-semibold bg-[white] rounded-[50px] p-2 block w-[190px] h-[73px] text-center mx-8 hover:scale-105 hover:text-white hover:bg-[#009929] hover:font-bold transition-transform duration-300" href="">Cards</a>
              <a id="button" className=" text-[30px] font-semibold bg-[white] rounded-[50px] p-2 block w-[190px] h-[73px] text-center mx-8 hover:scale-105 hover:text-white hover:bg-[#009929] hover:font-bold transition-transform duration-300" href="">Loans</a>
              <a id="button" className=" text-[30px] font-semibold bg-[white] rounded-[50px] p-2 block w-[190px] h-[73px] text-center mx-8 hover:scale-105 hover:text-white hover:bg-[#009929] hover:font-bold  transition-transform duration-300" href="">Transactions</a>
            </div>

            <div className="contenedor-logoSalida">
              <a className="block" href=""><img className="w-[100px] mt-[26px] block mr-[20px]" src="https://www.pngkey.com/png/full/400-4009588_png-file-svg-log-out-icon-png.png" alt="" /></a>
            </div>
        </div>
  
    </header>
  )
}

export default Header