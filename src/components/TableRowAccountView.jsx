import React from 'react'

function TableRowAccountView({type, typeColor, amount, amountColor, date, hour, description}) {
  return (
    <tr className='border-t border-red-600 rounded-[10px] transition-transform duration-300 ease-in-out hover:scale-105'>
      <td className={` pt-[10px] pl-[30px] font-bold   ${typeColor}`}>{type}</td>
      <td className={` pt-[10px] pl-[15px] font-semibold ${amountColor}`}>{amount}</td>
      <td className=' pt-[10px] pl-[25px] text-[22px]'>{date}</td>
      <td className=' pt-[10px] pl-[25px] text-[22px]'>{hour}</td>
      <td className=' pt-[10px] pl-[25px] text-[21px] w-[510px]'>{description}</td>
    </tr>
  )
}

export default TableRowAccountView