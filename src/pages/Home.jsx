import React, { useEffect } from 'react'
import Logo from "../assets/Logo.png"
import "./Home.css"
import Invest from "../assets/InvestIllustrationPNG.png"

function Home() {

  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className="relative flex-1">
          <div className='w-full h-[910px]  flex flex-row justify-center items-center'>
            <div className='w-[600px] h-[90%] flex flex-row justify-center items-center'>
              <img className='w-[560px]' src={Logo} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div>
                <h1 id='text3DHome' className='inline-block mr-[25px] bg-white h-[115px] relative z-20' >BANK OF </h1> <h1 id='text3DAmerica' className='inline-block relative z-10'> AMERICA</h1>
              </div>
              <h1 id='fade-in' className='text-[40px] font-thin mt-[20px]'>Your Trust, Our Commitment</h1>
            </div>
          </div>
        </div>


        <div className='w-full flex flex-col items-center mt-[160px]'>
          <div className='w-[90%]'>
              <div id='contentDiv1' className='w-full h-[300px] rounded-bl-[300px] rounded-tr-[300px] flex flex-row bg-[#19cf19]'>
                <div id='bg1div' className=' w-[30%] h-[440PX] relative bottom-[140px] rounded-bl-[300px]'>
                </div>
                <div>
                  <div className='h-full flex flex-col justify-center'>
                    <div className=''>
                      <h1 id='textGray'>Grow Your Wealth</h1>
                      <p className='text-[30px] text-[#000000d7] mt-[20px]'>Explore diverse investment opportunities with us <br /> to build a brighter financial future tailored <br /> to your goals</p>
                    </div>
                  </div>
                </div>
              </div>
            <div id='contentDiv2' className='w-full h-[300px]  rounded-br-[300px] rounded-tl-[300px] flex justify-end'>
              <div className='h-full flex flex-col justify-center'>
                <div className='mr-[40px]'>
                  <h1 id='textGreen' className='text-end'> Easy Transfers </h1>
                  <p className='text-[30px] text-end text-[#000000d7] mt-[20px]'>Enjoy quick and hassle-free transfers, anytime and <br /> anywhere,  with our secure and user-friendly <br /> platform.</p>
                </div>
              </div>
              <div id='bg2div' className=' w-[30%] h-[440PX] relative bottom-[140px] rounded-br-[300px] rounded-tr-[140px]'>

              </div>
            </div>
            <div id='contentDiv3' className='w-full h-[300px] rounded-bl-[300px] rounded-tr-[300px] flex flex-row bg-[#19cf19e3] mt-[200px]'>
              <div id='bg3div' className=' w-[30%] h-[440PX] relative bottom-[140px] rounded-bl-[300px]'>

              </div>
              <div className='h-full flex flex-col justify-center'>
                <div className='ml-[40px]'>
                  <h1 id='textGray'>Flexible Loans</h1>
                  <p className='text-[30px] text-[#000000d7] mt-[20px]' >Get the funds you need with our flexible loan <br /> options designed to meet your financial needs <br /> and circumstances</p>
                </div>
              </div>
            </div>
            <div id='contentDiv4' className='w-full h-[300px] rounded-br-[300px] rounded-tl-[300px] flex justify-end'>
              <div className='h-full flex flex-col justify-center'>
                <div className='mr-[30px]'>
                  <h1 id='textGreen'>Your Safety, Our Priority</h1>
                  <p className='text-[30px] text-end text-[#000000d7] mt-[20px]'>We prioritize your safety with cutting-edge security<br /> measures,  ensuring your data and transactions are <br /> always protected</p>
                </div>
              </div>
              <div id='bg4div' className=' w-[30%] h-[440PX] relative bottom-[140px] rounded-br-[300px]'>

              </div>
            </div>
            <div id='contentDiv5' className='w-full h-[300px] rounded-bl-[300px] rounded-tr-[300px] flex flex-row bg-[#19cf19e3] mt-[200px] mb-[200px]'>
              <div id='bg5div' className=' w-[30%] h-[440PX] relative bottom-[140px] rounded-bl-[300px]'>

              </div>
              <div className='h-full flex flex-col justify-center'>
                <div className='ml-[40px]'>
                  <h1 id='textGray'>Always Here to Help</h1>
                  <p className='text-[30px] text-[#000000d7] mt-[20px]'>Our dedicated support team is available 24/7 to assist you <br /> with any questions or concerns you may have</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
// componentes, use useEffect, node, react
export default Home