import React, { useEffect } from 'react'
import Logo from "../assets/Logo.png"
import "./Home.css"
import Invest from "../assets/InvestIllustrationPNG.png"

function Home() {

  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className="relative flex-1">
          <div className='w-full h-screen lg:h-[910px]  flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-[600px] lg:h-[90%] flex flex-row justify-center items-center'>
              <img className='w-[220px] lg:w-[560px]' src={Logo} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <div className='w-full flex flex-col lg:flex-row'>
                <h1 id='text3DHome' className='inline-block lg:mr-[25px] bg-white p-[5px] text-[22vw] lg:text-[98px] font-bold relative z-20' >BANK OF </h1>
                <h1 id='text3DAmerica' className='inline-block relative z-10 text-[22vw] p-[5px] lg:text-[95px] font-bold'> AMERICA</h1>
              </div>
              <h1 id='fade-in' className='text-[8vw] lg:text-[40px] font-thin mt-[20px]'>Your Trust, Our Commitment</h1>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center mt-[200px]'>
          <div className='w-[96%] lg:w-[90%] relative z-0'>

            <div id='contentDiv1' className='rounded-bl-[100px] rounded-tr-[100px] lg:rounded-bl-[300px] lg:rounded-tr-[300px]'>
              <div id='bg1div' className=' w-[330px] lg:w-[0px] h-[280PX] absolute z-10 top-[-165px] rounded-bl-[300px] '>
              </div>
              <div className='w-full h-[200px] lg:h-[300px] rounded-bl-[100px] rounded-tr-[100px] lg:rounded-bl-[300px] lg:rounded-tr-[300px] flex flex-row bg-[#19cf19] mb-[250px] relative z-20'>
                <div id='bg1div' className=' w-[0px] h-[260PX] lg:w-[30%] lg:h-[440PX] absolute z-10 lg:relative bottom-[108px] lg:bottom-[140px] rounded-bl-[300px] '>
                </div>
                <div>
                  <div className='h-full flex flex-col justify-center pl-[40px] lg:pl-[0px]'>
                    <div className=''>
                      <h1 id='textGray' className='text-[30px] lg:text-[70px] font-bold'>Grow Your Wealth</h1>
                      <p className='text-[15px] lg:text-[30px] text-[#000000d7] mt-[20px]'>Explore diverse investment opportunities with us <br /> to build a brighter financial future tailored <br /> to your goals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id='contentDiv2' className='rounded-br-[100px] rounded-tl-[100px] lg:rounded-br-[300px] lg:rounded-tl-[300px]'>
              <div className='relative top-[-160px] flex flex-row justify-center'>
                <div id='bg2div' className='w-[83vw]  lg:w-[0px] h-[280PX] absolute z-10'>
                </div>
              </div>

              <div className='w-full h-[200px] lg:h-[300px]  rounded-br-[100px] rounded-tl-[100px] lg:rounded-br-[300px] lg:rounded-tl-[300px] flex justify-end mb-[250px] bg-white relative z-20'>
                <div className='h-full flex flex-col justify-center'>
                  <div className='mr-[20px] lg:mr-[40px]'>
                    <h1 id='textGreen' className='lg:text-end text-[30px] lg:text-[70px] font-bold'> Easy Transfers </h1>
                    <p className='text-[15px] lg:text-[30px] lg:text-end text-[#000000d7] mt-[20px]'>Enjoy quick and hassle-free transfers, anytime and <br /> anywhere,  with our secure and user-friendly <br /> platform.</p>
                  </div>
                </div>
                <div id='bg2div' className=' w-[0px] h-[440PX] lg:w-[30%] relative bottom-[140px] rounded-br-[300px] rounded-tr-[140px]'>
                </div>
              </div>
            </div>


            <div id='contentDiv3' className='rounded-bl-[100px] rounded-tr-[100px] lg:rounded-bl-[300px] lg:rounded-tr-[300px]'>
              <div id='bg3div' className=' w-[330px] lg:w-[0px] h-[280PX] absolute z-10 top-[-165px] rounded-bl-[300px] '>
              </div>
              <div className='w-full h-[200px] lg:h-[300px] rounded-bl-[100px] rounded-tr-[100px] lg:rounded-bl-[300px] lg:rounded-tr-[300px] flex flex-row bg-[#19cf19] mb-[250px] relative z-20'>
                <div id='bg3div' className=' w-[0px] h-[260PX] lg:w-[30%] lg:h-[440PX] absolute z-10 lg:relative bottom-[108px] lg:bottom-[140px] rounded-bl-[300px] '>
                </div>
                <div>
                  <div className='h-full flex flex-col justify-center pl-[40px] lg:pl-[0px]'>
                    <div className=''>
                      <h1 id='textGray' className='text-[30px] lg:text-[70px] font-bold'>Flexible Loans</h1>
                      <p className='text-[15px] lg:text-[30px] text-[#000000d7] mt-[20px]'>Get the funds you need with our flexible loan <br /> options designed to meet your financial needs <br /> and circumstances</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div id='contentDiv4' className='rounded-br-[100px] rounded-tl-[100px] lg:rounded-br-[300px] lg:rounded-tl-[300px]'>
              <div className='relative top-[-160px] flex flex-row justify-center '>
                <div id='bg4div' className='w-[83vw] lg:w-[0px] h-[280PX] absolute z-10'>
                </div>
              </div>

              <div className='w-full h-[200px] lg:h-[300px]  rounded-br-[100px] rounded-tl-[100px] lg:rounded-br-[300px] lg:rounded-tl-[300px] flex justify-end mb-[250px] bg-white relative z-20'>
                <div className='h-full flex flex-col justify-center'>
                  <div className='mr-[30px] lg:mr-[40px]'>
                    <h1 id='textGreen' className='lg:text-end text-[30px] lg:text-[70px] font-bold'> Easy Transfers </h1>
                    <p className='text-[15px] lg:text-[30px] lg:text-end text-[#000000d7] mt-[20px]'>Enjoy quick and hassle-free transfers, anytime and <br /> anywhere,  with our secure and user-friendly <br /> platform.</p>
                  </div>
                </div>
                <div id='bg4div' className=' w-[0px] h-[440PX] lg:w-[30%] relative bottom-[140px] rounded-br-[300px] rounded-tr-[140px]'>
                </div>
              </div>
            </div>


            <div id='contentDiv5' className='rounded-bl-[100px] rounded-tr-[100px] lg:rounded-bl-[300px] lg:rounded-tr-[300px]'>
              <div id='bg5div' className=' w-[330px] lg:w-[0px] h-[280PX] absolute z-10 top-[-165px] rounded-bl-[300px] '>
              </div>
              <div className='w-full h-[200px] lg:h-[300px] rounded-bl-[100px] rounded-tr-[100px] lg:rounded-bl-[300px] lg:rounded-tr-[300px] flex flex-row bg-[#19cf19] mb-[250px] relative z-20'>
                <div id='bg5div' className=' w-[0px] h-[260PX] lg:w-[30%] lg:h-[440PX] absolute z-10 lg:relative bottom-[108px] lg:bottom-[140px] rounded-bl-[300px] '>
                </div>
                <div>
                  <div className='h-full flex flex-col justify-center pl-[40px] lg:pl-[0px]'>
                    <div className=''>
                      <h1 id='textGray' className='text-[30px] lg:text-[70px] font-bold'>Always Here to Help</h1>
                      <p className='text-[15px] lg:text-[30px] text-[#000000d7] mt-[20px] text-wrap pr-[20px]'>Our dedicated support team is available 24/7 to assist you with any questions or concerns you may have</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}
export default Home