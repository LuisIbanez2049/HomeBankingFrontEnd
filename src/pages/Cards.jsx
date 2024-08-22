import React from 'react'
import "./Cards.css"
import CardComponent from '../components/CardComponent'

function Cards() {
  return (
    <div>
      <div className='border border-[#72cb10] w-[180px] absolute top-[31px] left-[860px]'></div>
        <CardComponent/>
    </div>
  )
}

export default Cards