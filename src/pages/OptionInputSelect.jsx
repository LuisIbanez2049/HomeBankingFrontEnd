import React from 'react'

function OptionInputSelect({optionName, value}) {
  return (
    <option value={value}>{optionName}</option>
  )
}

export default OptionInputSelect