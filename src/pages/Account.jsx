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

  // useState es un hook que me permite añadir un estado a un componente. En este caso inicializo el estado "account" y digo que inicialmente su valor es un array vacio
  // Este estado va a controlar que el componente se vuelva a renderizar cada vez que se llama a la funcion "setAccount" para actualizar el estado 
  const [account, setAccount] = useState({})

  // useState es un hook que me permite añadir un estado a un componente. Este estado va a controlar que el componente se renderice cada vez que se actualice account 
  // Aca tengo un estado, y defino que ese estado inicialmente va a tener como valor un objeto vacio. El nombre de ese estado va a ser "account", y va a tener un metodo 
  // que me permite actualizar ese estado. Cada vez que se llama a ese estado React vuelve a renderizar el componente con el estado actualizado 



  // Me diante axios hago una peticion GET a la API que desarrollé con intellij 
  const requesAccountById = () => {
    axios.get(`http://localhost:8080/api/accounts/${id}`)
      .then(response => {
        // Si la respuesta es exitosa actualiza el estado de "account" con los datos que me trae la peticion 
        setAccount(response.data)

      })
      .catch(error => {
        console.error("Error fetching account:", error);
      });
  }

  console.log(account)

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