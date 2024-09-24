import React from 'react'
import "./ButtonRegisterForm.css"

function ButtonRegisterForm({title, handleOnClick}) {
  return (
    <div>
      <div className="wrap">
        <button onClick={handleOnClick} type="submit" className="button">{title}</button>
      </div>
    </div>
  )
}

export default ButtonRegisterForm