import React from 'react'
import './ConfirmationPopUpAlert.css'

function ConfirmationPopUpAlert({message, handleOnClickAccept, handleOnClickCancel}) {
  return (
    <div>
        <div className='w-full h-full absolute top-0 flex flex-row justify-center items-center z-30'>
         <div id='conteinerAllConfirmationPopUpAlert' className='w-[500px] rounded-[30px] flex flex-col bg-[#ffffff] justify-around'>
            <div className='my-[20px]'>
                <p className=' text-center text-[25px] px-[15px] font-extrabold'>{message}</p>
            </div>
            <div className='w-full flex flex-row justify-around my-[30px]'>
                <button onClick={handleOnClickAccept} id='buttomAccept'>
                    <p className=' p-[10px] text-[20px] text-[#424242] font-bold bg-[#26d126]'>ACCEPT</p>
                </button>
                <button onClick={handleOnClickCancel} id='buttomCancel'>
                    <p className=' p-[10px] text-[20px] text-white font-bold bg-[#5f20d4]'>CANCEL</p>
                </button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default ConfirmationPopUpAlert