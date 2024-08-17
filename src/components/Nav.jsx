import React from 'react'
import ButtonNav from './ButtonNav'

function Nav() {
  return (
    <div className='w-full h-full flex flex-col justify-center mt-12'>
        <div className='flex flex-row'>
        <ButtonNav path="/" title="Home"/>
        <ButtonNav path="/account" title="Account"/>
        <ButtonNav path="" title="Cards"/>
        <ButtonNav path="" title="Loans"/>
        <ButtonNav path="" title="Transaction"/>
        </div>
    </div>
  )
}

export default Nav