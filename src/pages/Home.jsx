import React, { useEffect } from 'react'
import Logo from "../assets/Logo.png"
import "./Home.css"

function Home() {
  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className="relative flex-1">
          
          <div className='border border-[#72cb10] w-[180px] absolute top-[-74px] left-[405px]'></div>


          <div className='w-full h-[910px]  flex flex-row justify-center items-center'>
            <div className='w-[600px] h-[90%] flex flex-row justify-center items-center'>
              <img className='w-[560px]' src={Logo} alt="" />
            </div>
            <div className='flex flex-row justify-center items-center'>
              <h1 id='text3DHome' className='inline-block mr-[25px]' >BANK OF </h1> <h1 id='text3DAmerica' className='inline-block'> AMERICA</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// componentes, use useEffect, node, react
export default Home