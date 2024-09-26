import React from 'react'

function TableRowAccountView({type, typeColor, amount, amountColor, date, hour, description}) {
  return (
    <tr className='border-t border-red-600 rounded-[10px] '>
      {/* <td className={`border border-[#000000ad] p-[10px] font-bold  ${typeColor}`}>{type}</td>
      <td className={`border border-[#000000ad] p-[10px] font-semibold ${amountColor}`}>{amount}</td>
      <td className='border border-[#000000ad] p-[10px] text-[25px]'>{date}</td>
      <td className='border border-[#000000ad] p-[10px] text-[25px]'>{hour}</td>
      <td className='border border-[#000000ad] p-[10px] text-[20px] w-[440px]'>{description}</td> */}
      <td className={` pt-[10px] pl-[15px] font-bold   ${typeColor}`}>{type}</td>
      <td className={` pt-[10px] pl-[15px] font-semibold ${amountColor}`}>{amount}</td>
      <td className=' pt-[10px] pl-[25px] text-[22px]'>{date}</td>
      <td className=' pt-[10px] pl-[25px] text-[22px]'>{hour}</td>
      <td className=' pt-[10px] pl-[25px] text-[21px] w-[460px]'>{description}</td>
    </tr>
  )
}

export default TableRowAccountView