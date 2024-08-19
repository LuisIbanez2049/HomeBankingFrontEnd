import React from 'react'
import ButtonNav from './ButtonNav'
import LogOutArrow from "../assets/LogOutArrow.png";
import "./Nav.css"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div id="containerLogo-Buttons-LogoLeave" className="w-full h-[105px] flex flex-row">
          <div id="contenedor-logo" className="w-[20%] h-full flex flex-row justify-center items-center">
            <div>
              <Link to=""> <div id="logo" className=""></div> </Link>
             {/* <Link id='buttonNav' className='mx-4' to={props.path}><span>{props.title}</span></Link> */}
            </div>
          </div>
  
          <div className='w-[60%] h-full flex flex-col justify-center'>
            <div className='flex flex-row w-full '>
            <ButtonNav path="/" title="Home"/>
            <ButtonNav path="/account" title="Account"/>
            <ButtonNav path="" title="Cards"/>
            <ButtonNav path="/loan" title="Loans"/>
            <ButtonNav path="/transaction" title="Transaction"/>
            </div>
          </div>
  
          <div id="contenedor-logOut" className="w-[20%] flex flex-row justify-center items-center">
            <div>
              <Link to=""> <div id="logOut" className=""> <img id="arrow" className="w-[66px] h-[66px] relative top-[-1px] left-2" src={LogOutArrow} alt="" /> </div> </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav