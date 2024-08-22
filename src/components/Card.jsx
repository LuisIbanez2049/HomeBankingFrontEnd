import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div id="containerAttributes" className="w-[480px] h-[232px] rounded-[20px]">
      <Link to={`/account/${props.id}`}>
      <div className='h-full text-[26px] text-black font-semibold flex flex-row justify-center items-center'>
        <div>
          <h1 id='h1card' className="my-2 text-white">Number Account: <span className="ml-4">{props.account}</span></h1>
          <h1 id='h1card' className=" text-white">Amount: </h1>
          <h1 id='shadow' className=" text-center"> <span className="text-[45px] text-[#ffffff] font-bold">{props.amount}</span></h1>
          <h1 id='h1card' className=" text-white">Creation date: <span className="ml-4">{props.creationDate}</span></h1>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Card