import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import Calendar from "../assets/calendar.png"

function Card(props) {
  return (
    <div id="containerAttributes" className="w-[495px] h-[242px] rounded-[20px]">
      <Link to={`/account/${props.id}`}>
      <div className='h-full text-[26px] text-black font-semibold flex flex-row justify-center items-center'>
        <div>
          <h1 id='h1card' className="my-2 text-white text-[]">Number Account: <span className="ml-4 text-[30px] bg-[white] p-[5px] rounded-[10px] text-[#72cb10]">{props.account}</span></h1>
          <h1 id='h1card' className=" text-white">Amount: </h1>
          <h1 id='shadowAmount' className=" text-center"> <span className="text-[45px] text-[#72cb10] font-bold bg-[white] p-[5px] rounded-[16px]">{props.amount}</span></h1>
          <div className='flex flex-row'>
            <img className='w-[36px] h-[36px] mr-[8px]' src={Calendar} alt="" /> <h1 id='h1card' className=" text-white text-[24px]">Creation date: <span className="ml-4 text-white text-[22px]">{props.creationDate}</span></h1>
            {/* <h1><span className="ml-4 text-white text-[22px]">{props.creationDate}</span></h1> */}
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Card