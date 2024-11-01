import React, { useEffect, useState } from 'react'
import ButtonNav from './ButtonNav'
import LogOutArrow from "../assets/LogOutArrow.png";
import "./Nav.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';
import { logoutAction } from '../redux/actions/authenticationAction';

function Nav() {

  const location = useLocation();
  const isActive = (path) => location.pathname === path
  const { id } = useParams();
  const isLoggedIn = useSelector(store => store.authenticationReducer.isLoggedIn)


  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(logoutAction())
  }

  //----------------------------------------------------------VERIFICAR EL ANCHO DE LA PANTALLA------------------------------------------

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 450);

  useEffect(() => {
    // Función para actualizar el estado según el ancho de la pantalla
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 450);
    };

    // Agregar el listener de evento al cargar el componente
    window.addEventListener('resize', handleResize);

    // Eliminar el listener al desmontar el componente para evitar pérdidas de memoria
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //----------------------------------------------------------VERIFICAR EL ANCHO DE LA PANTALLA------------------------------------------



  const [isOpen, setIsOpen] = useState(false);



  return (
    <div>
      {
        isLoggedIn ? (
          isMobileView ? (
            <div className='w-full flex flex-row justify-between relative'>
              <div>
                <Link to="/accounts"> <div id="logo" className=""></div> </Link>
              </div>
              <span className='text-[40px] text-[#07d611] m-auto' onClick={() => { setIsOpen(true) }}> <i className="fa-solid fa-bars"></i> </span>

              <div className={`${isOpen ? '' : 'hidden'} absolute w-full flex flex-row justify-center bg-[#ffffff] pb-4 z-30`}>
                <div className=' w-[190px] mt-[20px]' onClick={() => { setIsOpen(false) }}>
                  <div className={`${isActive("/accounts") ? "border-[1px] border-[#07d611]" : `${isActive("/account/" + id) ? "border-t-[1px] border-[#07d611]" : ""}`}`}>
                    <ButtonNav path="/accounts" title="Accounts" />
                  </div>
                  <div className={`${isActive("/cards") ? "border-[1px] border-[#07d611]" : `${isActive("/applyCard") ? "border-t-[1px] border-[#07d611]" : ""}`}`}>
                    <ButtonNav path="/cards" title="Cards" />
                  </div>
                  <div className={`${isActive("/loan") ? "border-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/loan" title="Loans" />
                  </div>
                  <div className={`${isActive("/transaction") ? "border-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/transaction" title="Transactions" />
                  </div>
                </div>
              </div>

              <div id="contenedor-logOut" className="w-[20%] flex flex-row justify-center items-center">
                <div>
                  <Link onClick={handleClick} to="/login"> <div id="logOut" className=""> <img id="arrow" className="w-[66px] h-[66px] relative top-[-1px] left-2" src={LogOutArrow} alt="" /> </div> </Link>
                </div>
              </div>

            </div>
          ) : (
            <div id="containerLogo-Buttons-LogoLeave" className="w-full h-[105px] flex flex-row">
              <div id="contenedor-logo" className="w-[20%] h-full flex flex-row justify-center items-center">
                <div>
                  <Link to="/accounts"> <div id="logo" className=""></div> </Link>

                </div>
                <h1 className='ml-[12px]'>BANK OF <br /><span className='text-[green]'>AMERICA</span></h1>
              </div>
              <div className='w-[60%] h-full flex flex-col justify-center'>
                <div className='flex flex-row w-full justify-between flex-wrap'>
                  <div className={`${isActive("/accounts") ? "border-t-[1px] border-[#07d611]" : `${isActive("/account/" + id) ? "border-t-[1px] border-[#07d611]" : ""}`}`}>
                    <ButtonNav path="/accounts" title="Accounts" />
                  </div>
                  <div className={`${isActive("/cards") ? "border-t-[1px] border-[#07d611]" : `${isActive("/applyCard") ? "border-t-[1px] border-[#07d611]" : ""}`}`}>
                    <ButtonNav path="/cards" title="Cards" />
                  </div>
                  <div className={`${isActive("/loan") ? "border-t-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/loan" title="Loans" />
                  </div>
                  <div className={`${isActive("/transaction") ? "border-t-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/transaction" title="Transactions" />
                  </div>
                </div>
              </div>

              <div id="contenedor-logOut" className="w-[20%] flex flex-row justify-center items-center">
                <div>
                  <Link onClick={handleClick} to="/login"> <div id="logOut" className=""> <img id="arrow" className="w-[66px] h-[66px] relative top-[-1px] left-2" src={LogOutArrow} alt="" /> </div> </Link>
                </div>
              </div>
            </div>
          )

        ) :
          (
            <></>
          )
      }

      {
        !isLoggedIn ? (
          isMobileView ? (
            <div className='w-full flex flex-row justify-center relative z-30'>
              <span className='text-[40px] text-[#07d611]' onClick={() => { setIsOpen(true) }}> <i className="fa-solid fa-bars"></i> </span>

              <div className={`${isOpen ? '' : 'hidden'} absolute w-full flex flex-row justify-center bg-[#ffffff] pb-4`}>
                <div className=' w-[190px] mt-[20px]' onClick={() => { setIsOpen(false) }}>
                  <div className={`${isActive("/") ? "border-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/" title="Home" />
                  </div>
                  <div className={`${isActive("/login") ? "border-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/login" title="Login" />
                  </div>
                  <div className={`${isActive("/register") ? "border-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/register" title="Register" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div id="containerLogo-Buttons-LogoLeave" className="w-full h-[70px] flex flex-row justify-center">
              <div className='w-[60%] h-full flex flex-row justify-center'>
                <div className='flex flex-row w-full justify-between items-center flex-wrap'>
                  <div className={`${isActive("/") ? "border-t-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/" title="Home" />
                  </div>
                  <div className={`${isActive("/login") ? "border-t-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/login" title="Login" />
                  </div>
                  <div className={`${isActive("/register") ? "border-t-[1px] border-[#07d611]" : ""}`}>
                    <ButtonNav path="/register" title="Register" />
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <></>
        )

      }

    </div>
  )
}

export default Nav