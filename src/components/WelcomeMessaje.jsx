import React from 'react'

function WelcomeMessaje(props) {
  return (
    <h1 className="text-[40px] ml-8">Welcome, <span className="font-semibold text-[#72cb10]">{props.userName}</span>!</h1>
  )
}

export default WelcomeMessaje