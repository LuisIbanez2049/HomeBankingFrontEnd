import React from 'react'
import "./ButtonNav.css"
import { Link } from 'react-router-dom'

function ButtonNav(props) {
  return (
    //  <a id='buttonNav' className='mx-4' href="#"><span>{props.title}</span></a>
     <Link id='buttonNav' className='mx-4' to={props.path}><span>{props.title}</span></Link>
  )
}

export default ButtonNav