import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import MoneyDisplay from '../components/MoneyDisplay'
import TableRowAccountView from '../components/TableRowAccountView'



function Account() {

  // useParams es un hook que me va a retornar un objeto y utilizo desestrcturin para que me devuelva el valor de la propiedad "id" de ese objeto
  const { id } = useParams()
  const [account, setAccount] = useState([])


  const requesAccountById = () => {
    axios.get(`http://localhost:8080/api/accounts/${id}`)
      .then(response => {
        setAccount(response.data)

      })
      .catch(error => {
        console.error("Error fetching account:", error);
      });
  }

  console.log(account)
  useEffect(() => {

    console.log(id) // Verificar la id que recibo por la ruta
    requesAccountById()

  }, [id])

  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
      <div className='border border-[#72cb10] w-[180px] absolute top-[31px] left-[633px]'></div> {/* ------------------------------ */}
        <div id='containerAllAccount' className='w-full flex flex-row justify-center'>
          <div id='containerH1&div' className='w-[80%] mt-[40px]'>
            <h1 className="text-[45px] text-center">Your selected <span className="text-[#07d611] font-semibold">ACCOUNT</span></h1>
            <div id='containerDivCard&&DivForm' className='w-full flex flex-row justify-between border-t-4 border-[#07d611] flex-wrap'>
              <div id='divCard' className='h-[500px] flex flex-col justify-center'>
                <div id='card'>
                  {account && account.creationDate ? (
                    <Card
                      id={account.id}
                      account={account.number}
                      amount={<MoneyDisplay amount={account.balance} />}
                      creationDate={account.creationDate.slice(0, 10)}
                    />) : (<p>Loading account details...</p>)
                  }
                </div>
              </div>
              <div id='divFormAccount'>
                <div className='h-full flex flex-col justify-center'>
                  <div>
                    <h1 className='text-[38px] font-bold mb-[15px]'>Transactions Resume:</h1>
                    <div>
                      <table className='border  border-[#000000ad]  text-[33px] bg-slate-200'>
                        <thead>
                          <tr className=''>
                            <th className='border border-[#000000ad] p-[10px]'>TYPE</th>
                            <th className='border border-[#000000ad] p-[10px]'>AMOUNT</th>
                            <th className='border border-[#000000ad] p-[10px]'>DATE</th>
                            <th className='border border-[#000000ad] p-[10px]'>HOUR</th>
                            <th className='border border-[#000000ad] p-[10px]'>DESCRIPTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {account && account.transactions ? (account.transactions.map((transaction) => {
                            let colorType = ""
                            let colorAmount = ""
                            if (transaction.type == "CREDIT") {
                              colorType = "text-[green]"
                              colorAmount = "text-[green]"
                            } else if (transaction.type == "DEBIT") {
                              colorType = "text-[red]"
                              colorAmount = "text-[red]"
                            }
                            return (
                              <TableRowAccountView key={transaction.id} 
                              type={transaction.type} typeColor={colorType} 
                              amount={<MoneyDisplay amount={transaction.amount}/>} amountColor={colorAmount}
                              date={transaction.dateTime.slice(0,10)} 
                              hour={transaction.dateTime.slice(11,19)} 
                              description={transaction.description}/>
                            )
                          })):(<tr><td colSpan="5">Loading transactions...</td></tr>)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Account