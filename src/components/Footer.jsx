import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <footer className='relative z-20'>
      <div id="divFooter" className="w-full h-[110px] flex flex-col items-center">
        <div className="w-[500px]  h-[110px]">
         {/* <h1 className="text-[30px] text-[blue] font-bold" >Footer</h1> */}
         <div className="w-full flex flex-row justify-center mt-3">
         <a className='mx-[15px]' href="https://web.whatsapp.com/" target='blank'><i id="whatsapp" className="fa-brands fa-whatsapp"></i></a>
         <a className='mx-[15px]' href="https://www.instagram.com/" target='blank'><i id="instagram" className="fa-brands fa-instagram"></i></a>
         <a className='mx-[15px]' href="https://www.facebook.com/" target='blank'><i id="facebook" className="fa-brands fa-square-facebook"></i></a>
        </div>
        <div className="w-full flex flex-row justify-center mt-2">
          <small className="text-[19px]"><span className='mr-[10px]'><i className="fa-regular fa-copyright"></i> - All rights reserved</span> | 
          <a className='mx-[10px] hover:text-[#1e92f1]' href="https://www.linkedin.com/" target='_blank'>Luis Ibañez <span><i class="fa-brands fa-linkedin"></i></span></a> | 
          <a className='mx-[10px] hover:text-[#1e92f1]' href="https://github.com/LuisIbanez2049/HomeBankingFrontEnd.git" target='_blank'>
           GitHub <i class="fa-brands fa-github"></i></a></small>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer