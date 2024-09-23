import React from 'react'

function MoneyDisplay({amount}) {
    const formattedAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

  // return (
  //   <p>{formattedAmount}</p>
  // )
  return formattedAmount
  
}

export default MoneyDisplay