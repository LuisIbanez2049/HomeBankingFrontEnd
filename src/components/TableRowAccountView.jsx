import React from 'react'

function TableRowAccountView({type, typeColor, amount, amountColor, date, hour, description}) {
  return (
    <tr>
      <td className={`border border-[#000000ad] p-[10px] font-bold  ${typeColor}`}>{type}</td>
      <td className={`border border-[#000000ad] p-[10px] font-semibold ${amountColor}`}>{amount}</td>
      <td className='border border-[#000000ad] p-[10px] text-[25px]'>{date}</td>
      <td className='border border-[#000000ad] p-[10px] text-[25px]'>{hour}</td>
      <td className='border border-[#000000ad] p-[10px] text-[25px] w-[440px]'>{description}</td>
    </tr>
  )
}

export default TableRowAccountView