import React from 'react'
import "./Footer.css"


function Footer() {
  return (
    <footer>
      <div id="divFooter" className="w-full h-[120px] rounded-t-[140px] flex flex-col items-center">
        <div className="w-[300px]  h-[110px]">
         {/* <h1 className="text-[30px] text-[blue] font-bold" >Footer</h1> */}
         <div className="w-full flex flex-row justify-between mt-4">
         <a href=""><i id="whatsapp" className="fa-brands fa-whatsapp"></i></a>
         <a href=""><i id="instagram" className="fa-brands fa-instagram"></i></a>
         <a href=""><i id="facebook" className="fa-brands fa-square-facebook"></i></a>
        </div>
        <div className="w-full flex flex-row justify-center mt-3">
         <small className="text-[20px]"><i className="fa-regular fa-copyright"></i> - All rights reserved</small>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer