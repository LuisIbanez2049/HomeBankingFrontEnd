import React from 'react'
import { useState } from 'react';
import MoneyDisplay from './MoneyDisplay';

function InputTypeRange({maxAmount}) {


  // uso useState para almacenar y actualizar el valor actual del input. Lo incializo en 0
  const [amount, setAmount] = useState(0); // Estado para el valor seleccionado

  const handleAmountChange = (event) => {
    setAmount(event.target.value); // Actualiza el estado con el nuevo valor
  };
    
  return (
    <div>
        <div className="mb-4">
        <label htmlFor="amount" className="w-full text-white font-bold mb-2 flex flex-row justify-between">
          Amount <span>Max {<MoneyDisplay amount={maxAmount}/>}</span>
        </label>
        <input
          type="range"
          id="amount"
          className="w-full"
          min="0"
          max={maxAmount}
          step="1000" // de cuanto en cuanto quiero que se se muestren los numeros
          value={amount} // Valor del input controlado por el estado
          //  onChange llama a handleAmountChange cada vez que el usuario cambia el valor del input. Esta función toma el nuevo valor del input (event.target.value)
          // y actualiza el estado amount.
          onChange={handleAmountChange} // Evento para manejar el cambio de valor
          
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