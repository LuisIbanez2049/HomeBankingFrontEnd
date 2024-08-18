import React from 'react'
import "./ButtonNav.css"
import { Link } from 'react-router-dom'

function ButtonNav(props) {
  return (
     <Link id='buttonNav' className='mx-4' to={props.path}><span>{props.title}</span></Link>
  )
}

export default ButtonNav