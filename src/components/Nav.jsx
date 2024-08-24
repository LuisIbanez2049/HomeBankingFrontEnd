import React from 'react'
import ButtonNav from './ButtonNav'
import LogOutArrow from "../assets/LogOutArrow.png";
import "./Nav.css"
import { Link, useLocation } from 'react-router-dom'

function Nav() {

  const location = useLocation();
  const isActive = (path) => location.pathname === path

  return (
    <div>
      <div id="containerLogo-Buttons-LogoLeave" className="w-full h-[105px] flex flex-row">
          <div id="contenedor-logo" className="w-[20%] h-full flex flex-row justify-center items-center">
            <div>
              <Link to=""> <div id="logo" className=""></div> </Link>
             {/* <Link id='buttonNav' className='mx-4' to={props.path}><span>{props.title}</span></Link> */}
            </div>
          </div>
          {/* <Link to="/" className={${
          isActive('/') ? 'bg-[#B2B5E0] text-[#213F99]  border-b-4 border-[#111439] text-[20px]' : 'bg-[#B2B5E0] text-[#213F99] text-[20px]'
        }   px-4 py-2    rounded  hover:text-[#f0f0f0]}  >
                Accounts 
            </Link> */}
          <div className='w-[60%] h-full flex flex-col justify-center'>
            <div className='flex flex-row w-full justify-between flex-wrap'>
              <div className={`${isActive("/") ? "border-t-[1px] border-[#07d611]" : ""}`}>
                <ButtonNav  path="/" title="Home"/>
              </div>
            <div className={`${isActive("/accounts") ? "border-t-[1px] border-[#07d611]" : ""}`}>
              <ButtonNav  path="/accounts" title="Accounts"/>
            </div>
            <div className={`${isActive("/cards") ? "border-t-[1px] border-[#07d611]" : ""}`}>
             <ButtonNav path="/cards" title="Cards"/>
            </div>
            <div className={`${isActive("/loan") ? "border-t-[1px] border-[#07d611]" : ""}`}>
             <ButtonNav path="/loan" title="Loans"/>
            </div>
            <div className={`${isActive("/transaction") ? "border-t-[1px] border-[#07d611]" : ""}`}>
             <ButtonNav path="/transaction" title="Transaction"/>
            </div>
            </div>
          </div>
  
          <div id="contenedor-logOut" className="w-[20%] flex flex-row justify-center items-center">
            <div>
              <Link to="/login"> <div id="logOut" className=""> <img id="arrow" className="w-[66px] h-[66px] relative top-[-1px] left-2" src={LogOutArrow} alt="" /> </div> </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav