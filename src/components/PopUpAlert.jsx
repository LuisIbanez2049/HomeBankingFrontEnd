import React from 'react'
import "../components/PopUpAlert.css"
import { Link } from 'react-router-dom'

function PopUpAlert({gif, message, handleOnClick, link}) {
  return (
    <div className='w-full h-full absolute top-0 left-0 '>
        <div className='w-full h-full absolute flex flex-row justify-center items-center z-30'>
         <div id='conteinerAll' className='w-[500px] h-[400px] rounded-[30px] flex flex-col bg-[#ffffff] justify-around'>
            <div className='w-full flex flex-row justify-center'>
                <div className=''>
                    <img src={gif} alt="" className='w-[180px] h-[150px]'/>
                </div>
            </div>
            <div>
                <p className=' text-center text-[25px] px-[15px]'>{message}</p>
            </div>
            <div className='w-full flex flex-row justify-center'>
                <Link to={link}>
                 <button onClick={handleOnClick} id='buttomAccept'>
                    <p className=' p-[10px] text-[20px] text-white font-bold bg-[#5f20d4]'>ACCEPT</p>
                 </button>
                </Link>
            </div>
         </div>
        </div>
    </div>
  )
}

export default PopUpAlert