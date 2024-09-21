import React from 'react'
import { useState } from 'react';
import MoneyDisplay from './MoneyDisplay';

function InputTypeRange({maxAmount, amount, onChange}) {
    
  return (
    <div>
        <div className="mb-4">
        <label htmlFor="amount" className="w-full text-white font-bold mb-2 flex flex-row justify-between">
          Amount 
        </label>
        <div className='w-full flex flex-row justify-between text-white font-semibold'>
          <span>Min {<MoneyDisplay amount={amount}/>}</span>
          <span>Max {<MoneyDisplay amount={maxAmount}/>}</span>
        </div>
        <input
          type="range"
          id="amount"
          className="w-full"
          min="1000"
          max={maxAmount}
          step="1000" // de cuanto en cuanto quiero que se se muestren los numeros
          value={amount} // Valor del input controlado por el estado
          //  onChange llama a handleAmountChange cada vez que el usuario cambia el valor del input. Esta función toma el nuevo valor del input (event.target.value)
          // y actualiza el estado amount.
          onChange={(e) => onChange(e.target.value)} // Evento para manejar el cambio de valor
          
        />
        <div className="flex flex-row text-black mt-2 font-semibold bg-[white] w-[240px] p-[5px] rounded-[12px]">
            <span className='mr-[20px]'>Selected:</span>
            {<MoneyDisplay amount={amount}/>}
        </div>
      </div>
    </div>
  )
}

export default InputTypeRange