import React from 'react'
import "./ButtonRegisterForm.css"

function ButtonRegisterForm(props) {
  return (
    <div>
      <div className="wrap">
        <button type="submit" className="button">{props.title}</button>
      </div>
    </div>
  )
}

export default ButtonRegisterForm