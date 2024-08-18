import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div id="containerAttributes" className="w-[546px] h-[272px] text-[33px] text-black font-semibold flex flex-row justify-center items-center my-8 rounded-[20px]">
        <div>
        <h1 className="my-2">Number Account: <span className="ml-4">{props.account}</span></h1>
        <h1 className="my-2">Amount: </h1>
        <h1 className="my-1 text-center"> <span className="text-[45px] text-[#72cb10] font-bold">{props.amount}</span></h1>
        <h1 className="my-2">Creation date: <span className="ml-4">{props.creationDate}</span></h1>
        </div>
    </div>
  )
}

export default Card