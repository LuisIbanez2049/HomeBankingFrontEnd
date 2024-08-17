import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div id="containerAttributes" className="bg-white  w-[546px] h-[272px] text-[33px] font-semibold flex flex-row justify-center items-center my-8 rounded-[30px]">
        <div>
        <h1 className="my-2">Number Account: <span className="ml-4">{props.account}</span></h1>
        <h1 className="my-2">Amount: </h1>
        <h1 className="my-1 text-center"> <span className="text-[40px] text-[#72cb10]">{props.amount}</span></h1>
        <h1 className="my-2">Creation date: <span className="ml-4">{props.creationDate}</span></h1>
        </div>
    </div>
  )
}

export default Card