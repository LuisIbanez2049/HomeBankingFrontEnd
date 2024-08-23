import React, { useEffect } from 'react'
import ButtonRegisterForm from '../components/ButtonRegisterForm'
import "./Transaction.css"
import { useState } from 'react'
import axios from 'axios'
import OptionInputSelect from './OptionInputSelect'
function Transaction() {


    const [client, setClient] = useState({ accounts: [] })

    useEffect(() => {
        axios.get("http://localhost:8080/api/clients/1")
            .then((response) => {
                setClient(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])



    //-------------------------------------------------------------------------------------------------------------------------------------
    //Inicializo el estado con "Own" por lo que va a estar seleccionado cuando cargue la pagina 
    const [selectedTransactionType, setSelectedTransactionType] = useState('Own'); // Inicializa con "Own"

    // Maneja el cambio del radio button
    const handleTransactionTypeChange = (event) => {
        setSelectedTransactionType(event.target.value); // Actualiza el estado con el valor seleccionado
    };
    //-------------------------------------------------------------------------------------------------------------------------------------


    return (
        <div>
            <div id="bodyTransaction" className="flex flex-col min-h-screen">
                <div className='border border-[#72cb10] w-[180px] absolute top-[31px] left-[1316px]'></div> {/* -------------------------------------------------------- */}
                <div id='containerAllTransaction' className='w-full flex flex-row justify-center'>
                    <div id='containerTransactionForm-Background' className='w-[85%] border-b-4 border-[#07d611] flex flex-row justify-between flex-wrap mt-[30px]'>

                        <div id="containerTransactionTitle-Form-Button" className="w-[700px] h-[840px]">
                            <div id="containerTransactionTitle" className="w-full mb-[20px]">
                                <h1 className="text-[45px]">Make a <span className="text-[#07d611] font-semibold">TRANSACTION</span></h1>
                            </div>

                            <div id="containerFormTransaction" className="w-full flex flex-row justify-center h-[740px]">
                                {/* ksdjhkdshf */}
                                <div id="divFormTransaction" className="w-[600px] p-8 rounded-lg text-[20px] relative  mb-[30px]">
                                    <div className='w-full h-full flex flex-col justify-center'>
                                        <form>
                                            <div className="mb-4">
                                                <label htmlFor="transactionType" className="block text-white font-bold mb-2 text-[22px]">
                                                    Transaction destiny
                                                </label>
                                                <div className="flex space-x-4">
                                                    <label className="text-white">
                                                        <input type="radio" name="transactionType" value="Own" className="mr-2"
                                                            checked={selectedTransactionType === 'Own'} // Controla el radio button para "Own"
                                                            onChange={handleTransactionTypeChange} />

                                                        Own

                                                    </label>
                                                    <label className="text-white">
                                                        <input type="radio" name="transactionType" value="Others" className="mr-2"
                                                            checked={selectedTransactionType === 'Others'} // Controla el radio button para "Others"
                                                            onChange={handleTransactionTypeChange} />

                                                        Others
                                                    </label>
                                                </div>
                                            </div>



                                            {/* Muestra este div cuando "Own" está seleccionado */}
                                            {selectedTransactionType === 'Own' && (
                                                <div>
                                                <label htmlFor="destinyAccount" className="block text-white font-bold mb-2">
                                                    Destiny Account
                                                </label>
                                                <select
                                                    id="destinyAccount"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                >
                                                    <option value="">Select destiny account</option>
                                                    {/* You can add more options here if needed */}
                                                    {client.accounts && client.accounts.length > 0 && client.accounts.map((account) => {
                                                        // console.log(account.number)
                                                        return (
                                                            <OptionInputSelect key={account.id} optionName={account.number} />
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            )}

                                            {/* Muestra este div cuando "Others" está seleccionado */}
                                            {selectedTransactionType === 'Others' && (
                                                <div className="mb-4">
                                                <label htmlFor="destinyAccountOther" className="block text-white font-bold mb-2">
                                                    Destiny Account
                                                </label>
                                                <input
                                                    type="text"
                                                    id="destinyAccountOther"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter destiny account"
                                                    required
                                                />
                                            </div>
                                            )}

                                            
                                            

                                            <div className="mb-4 mt-[30px]">
                                                <label htmlFor="originAccount" className="block text-white font-bold mb-2">
                                                    Origin Account
                                                </label>
                                                <select
                                                    id="originAccount"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                >
                                                    <option value="">Select an account</option>
                                                    {/* You can add more options here if needed */}
                                                    {client.accounts && client.accounts.length > 0 && client.accounts.map((account) => {
                                                        // console.log(account.number)
                                                        return (
                                                            <OptionInputSelect key={account.id} optionName={account.number} />
                                                        )
                                                    })}
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="amount" className="block text-white font-bold mb-2">
                                                    Amount
                                                </label>
                                                <input
                                                    type="number"
                                                    id="amount"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter the amount"
                                                    required
                                                />
                                            </div>


                                         

                                            <div className="mb-20">
                                                <label htmlFor="description" className="block text-white font-bold mb-2">
                                                    Description
                                                </label>
                                                <input
                                                    type="text"
                                                    id="description"
                                                    maxLength="70"
                                                    className="w-full h-[70px] px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Enter a brief description (max. 70 characters)"
                                                    required
                                                />
                                            </div>


                                            <div id="buttonSubmitTransaction" className="mt-[60px]">
                                                <ButtonRegisterForm title="Submit" />
                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id='divBackGroundTransaction' className='w-[850px]'>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Transaction