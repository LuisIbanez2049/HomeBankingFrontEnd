import React from 'react'

function TableRowAccountView({type, typeColor, amount, amountColor, date, hour, description}) {
  return (
    <tr className='border-t border-red-600 rounded-[10px] transition-transform duration-300 ease-in-out hover:scale-105'>
      <td className={` pt-[10px] pl-[15px] lg:pl-[30px] font-bold text-[10px] lg:text-[30px]  ${typeColor}`}>{type}</td>
      <td className={` pt-[10px] pl-[10px] lg:pl-[15px] font-semibold text-[10px] lg:text-[30px] text-end ${amountColor}`}>{amount}</td>
      <td className=' pt-[10px] pl-[15px] lg:pl-[30px] text-[8px] lg:text-[22px]'>{date}</td>
      <td className=' pt-[10px] pl-[25px] lg:pl-[25px] text-[8px] lg:text-[22px]'>{hour}</td>
      <td className=' pt-[10px] pl-[10px] lg:pl-[25px] text-[10px] lg:text-[22px] w-[510px] pr-[30px]'>{description}</td>
    </tr>
  )
}

export default TableRowAccountView