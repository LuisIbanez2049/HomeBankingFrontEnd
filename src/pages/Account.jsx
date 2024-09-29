import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import MoneyDisplay from '../components/MoneyDisplay'
import TableRowAccountView from '../components/TableRowAccountView'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import "./Account.css"



function Account() {

  // useParams es un hook que me va a retornar un objeto y utilizo desestrcturin para que me devuelva el valor de la propiedad "id" de ese objeto
  const { id } = useParams()

  // useState es un hook que me permite añadir un estado a un componente. En este caso inicializo el estado "account" y digo que inicialmente su valor es un array vacio
  // Este estado va a controlar que el componente se vuelva a renderizar cada vez que se llama a la funcion "setAccount" para actualizar el estado 
  const [account, setAccount] = useState([])
  const [accountTransactions, setAccountTransactions] = useState([])
  const [showTable, setShowTable] = useState('hidden')
  const [showMessajeNoTransactions, setShowMessajeNoTransactions] = useState('')

  // useState es un hook que me permite añadir un estado a un componente. Este estado va a controlar que el componente se renderice cada vez que se actualice account 
  // Aca tengo un estado, y defino que ese estado inicialmente va a tener como valor un objeto vacio. El nombre de ese estado va a ser "account", y va a tener un metodo 
  // que me permite actualizar ese estado. Cada vez que se llama a ese estado React vuelve a renderizar el componente con el estado actualizado 

  const user = useSelector(store => store.authenticationReducer)


  // Me diante axios hago una peticion GET a la API que desarrollé con intellij 
  const requesAccountById = () => {
    const token = user.token;
    axios.get(`https://homebanking-luisibanez-deply-back.onrender.com/api/clients/accounts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        // Si la respuesta es exitosa actualiza el estado de "account" con los datos que me trae la peticion 
        setAccount(response.data)
        console.log(response.data)
        console.log(response.data.transactions)
        setShowMessajeNoTransactions('')
        setShowTable('hidden')
        if (response.data.transactions[0].amount > 10) {
          console.log("entra?")
          let sortedItems = response.data.transactions.sort((a, b) => b.id - a.id);
        setAccountTransactions(sortedItems)
        console.log(sortedItems)
        setShowMessajeNoTransactions('hidden')
        setShowTable('')
        }
      })
      .catch(error => {
        console.error("Error fetching account:", error);
      });
  }

  // useEffect es un hook que me permite gestionar efectos secundarios. se ejecuta cuando el componente se monta (por primera vez) y cada vez que el array de dependencia cambia, el id 
  // En este caso va a renderizar ejecutar la funcion "requesAccountById()" el cual hace la solicitud http y me va a mostrar por consola la id que obtine de la ruta
  // useEffect tambien tiene un array de dependencia basado en la id, el cual me indica que cada vez que la id cambie o se actualice, se va a renderizar de nuevo lo que hay dentro de use effect    

  // Este hook te permite ejecutar código después de que el componente se haya renderizado y también realizar limpieza cuando el componente se desmonte o se actualice.
  // Tambien me permite ver cuando el componente se destruye.
  useEffect(() => {

    console.log(id) // Verificar la id que recibo por la ruta
    requesAccountById()
    console.log("Inicio por primera vez");
    return () => {
      console.log("Me destruyo");
    };

  }, [id])


  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id='containerAllAccount' className='w-full flex flex-row justify-center'>
          <div id='containerH1&div' className='w-[80%] mt-[40px]'>
            <h1 className="text-[45px] text-center">Your selected <span className="text-[#07d611] font-semibold">ACCOUNT</span></h1>
            <div id='containerDivCard&&DivForm' className='w-full flex flex-col border-t-4 border-[#07d611] flex-wrap'>
              <div id='divCard' className='w-full h-[350px] flex flex-col justify-center items-center'>
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
              <div id='divFormAccount' className='w-full flex flex-row justify-center mb-[80px]'>
                <div className='h-full flex flex-col justify-center'>
                  <div>
                    <h1 className='text-[38px] font-bold mb-[15px] text-center'>Transaction Summary</h1>
                    <div id='divTable' className={`${showTable} p-[15px] rounded-[20px]`}>
                      <table id='table' className='text-[30px] bg-slate-200 rounded-[20px]'>
                        <thead>
                          <tr className='text-left'>
                            <th className='pt-[10px] pl-[30px] rounded-[20px]'>TYPE</th>
                            <th className='pt-[10px] pl-[15px]'>AMOUNT</th>
                            <th className='pt-[10px] pl-[25px]'>DATE</th>
                            <th className='pt-[10px] pl-[25px]'>HOUR</th>
                            <th className='pt-[10px] pl-[25px]'>DESCRIPTION</th>
                          </tr>
                        </thead>
                        <tbody className=' rounded-[20px]'>
                          {account && account.transactions ? (accountTransactions.map((transaction) => {
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
                                amount={<MoneyDisplay amount={transaction.amount} />} amountColor={colorAmount}
                                date={transaction.dateTime.slice(0, 10)}
                                hour={transaction.dateTime.slice(11, 19)}
                                description={transaction.description} />
                            )
                          })) : (<tr><td colSpan="5">Loading transactions...</td></tr>)}
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <div className={`${showMessajeNoTransactions} w-full flex flex-col items-center mb-[30px]`}>
                        <div id='divNoLoans' className={`${""} mt-[40px] p-[15px] rounded-[30px] w-[600px]`}>
                          <h1 id='h1NoCards' className='text-center text-[30px] p-[10px] font-extrabold rounded-[25px] text-[#e64848]'>{"YOU DON'T HAVE TRANSACTIONS"}</h1>
                        </div>
                      </div>
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