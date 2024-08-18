import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <footer className='relative z-20 z-20'>
      <div id="divFooter" className="w-full h-[110px] flex flex-col items-center">
        <div className="w-[300px]  h-[110px]">
         {/* <h1 className="text-[30px] text-[blue] font-bold" >Footer</h1> */}
         <div className="w-full flex flex-row justify-between mt-3">
         <a href="https://web.whatsapp.com/" target='blank'><i id="whatsapp" className="fa-brands fa-whatsapp"></i></a>
         <a href="https://www.instagram.com/" target='blank'><i id="instagram" className="fa-brands fa-instagram"></i></a>
         <a href="https://www.facebook.com/" target='blank'><i id="facebook" className="fa-brands fa-square-facebook"></i></a>
        </div>
        <div className="w-full flex flex-row justify-center mt-2">
          <small className="text-[19px]"><i className="fa-regular fa-copyright"></i> - All rights reserved</small>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer