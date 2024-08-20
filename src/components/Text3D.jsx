import React from 'react'
import "./Text3D.css"

function Text3D(props) {
  return (
    <div>
     <h1 id="text3d" className={props.textSize}>{props.title}</h1>
    </div>
  )
}

export default Text3D