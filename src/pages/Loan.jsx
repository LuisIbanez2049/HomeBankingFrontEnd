import React, { useRef } from "react";
import "./Loan.css";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import OptionInputSelect from "./OptionInputSelect";
import InputTypeRange from "../components/InputTypeRange";
import { useSelector } from "react-redux";
import store from "../redux/store";
import PopUpAlert from "../components/PopUpAlert";
import checkGif from "../assets/checkGif.gif"
import xGif from "../assets/xGif.gif"
import CardLoans from "../components/CardLoans";
import { Link } from "react-router-dom";

function Loan() {
  const [clientAccounts, setClientAccounts] = useState([])
  const [loans, setLoans] = useState([])
  const [selectedLoanName, setSelectedLoanName] = useState(""); // Estado para almacenar el nombre del préstamo seleccionado
  const [maxAmount, setMaxAmount] = useState(0); // Estado para almacenar el maxAmount
  const [payments, setPayments] = useState([])

  const user = useSelector(store => store.authenticationReducer)
  const [id, setId] = useState(0)
  const [amount, setAmmount] = useState(1000)
  const [selectedInstallments, setSelectedInstallments] = useState(0)
  const [destinyAccount, setDestinyAccount] = useState('')
  const [showElement, setShowElement] = useState('hidden')


  const [showPopUpAlert, setShowPopUpAlert] = useState('hidden')
  const [messageShowPopUpAlert, setMessageShowPopUpAlert] = useState('')
  const [gif, setGif] = useState('')
  const [link, setLink] = useState('/accounts')

  const [showInputLoan, setShowInputLoan] = useState('hidden')
  const [showInputOriginAccount, setShowInputOriginAccount] = useState('hidden')
  const [showInputPayment, setShowInputPayment] = useState('hidden')

  const [colorErrorInputLoan, setColorErrorInputLoan] = useState('')
  const [colorErrorInputOriginAccount, setColorErrorInputOriginAccount] = useState('')
  const [colorErrorInputPayment, setColorErrorInputPayment] = useState('')

  const [messageErrorInput, setMessageErrorInput] = useState('')
  const [messageErrorNoLoans, setMessageErrorNoLoans] = useState('')
  const [showMessageErrorNoLoans, setShowMessageErrorNoLoans] = useState('hidden')
  const [showForm, setShowForm] = useState('')

  const [clientLoans, setClientLoans] = useState([])
  const [showMessageNoLoansApplied, setShowMessageNoLoansApplied] = useState('hidden')
  const [aux, setAux] = useState('')

  const formRef = useRef(null)

  const handleOnClickPopAupAlert = () => {
    setShowPopUpAlert('hidden')
    // Desplazar hasta el final de la página
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
    formRef.current.reset(); // Resetea el formulario
    setDestinyAccount('')
    setSelectedLoanName('')
    setId(0)
    setShowElement('hidden')
    setSelectedInstallments(0)
    setAmmount(1000)
    setShowMessageNoLoansApplied('hidden')
    setAux('upDate')
  }

  const handleApplyLoanForm = async (event) => {
    console.log("click on button submit" + loans)
    event.preventDefault();
    const applyLoanForm = {
      id: id,
      amount: amount,
      installment: selectedInstallments,
      destinyAccount: destinyAccount
    }
    console.log("-----------" + loans)
    console.log('-----------------' + applyLoanForm)
    console.log('-----------------' + id)
    console.log('-----------------' + amount)
    console.log('-----------------' + selectedInstallments)
    console.log('-----------------' + destinyAccount)

    try {
      const token = user.token;
      const response = await axios.post('https://homebanking-luisibanez-deply-back.onrender.com/api/loans/', applyLoanForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setMessageShowPopUpAlert(<><span className="font-semibold">{response.data}</span></>)
      setGif(checkGif)
      setShowPopUpAlert('')
    } catch (error) {
      setMessageErrorInput('')
      setShowInputLoan('hidden')
      setColorErrorInputLoan('')
      setShowInputOriginAccount('hidden')
      setColorErrorInputOriginAccount('')
      setShowInputPayment('hidden')
      setColorErrorInputPayment('')
      console.error(error.response ? error.response.data : error.message);
      let errorMessage = error.response ? error.response.data : error.message
      if (errorMessage.includes('Destiny account')) {
        setMessageErrorInput('Please select an account.')
        setShowInputOriginAccount('')
        setColorErrorInputOriginAccount('border-2  border-[red]')
      }
      if (errorMessage.includes('Loan not')) {
        setMessageErrorInput('Please select one element of the list.')
        setShowInputLoan('')
        setColorErrorInputLoan('border-2  border-[red]')
      }
      if (errorMessage.includes('Installments')) {
        setMessageErrorInput(errorMessage + '.')
        setShowInputPayment('')
        setColorErrorInputPayment('border-2  border-[red]')
      }
    }
  }
  useEffect(() => {

    const token = user.token;
    console.log(token)


    axios.get('https://homebanking-luisibanez-deply-back.onrender.com/api/clients/current/accounts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setClientAccounts(response.data); // Actualiza el estado con los datos recibidos
        console.log(response.data); // Para verificar
      })
      .catch((error) => {
        console.log(error.response.data);
      });


    axios.get("https://homebanking-luisibanez-deply-back.onrender.com/api/loans/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setLoans(response.data)
        console.log(response.data)
        console.log('-----------------' + selectedLoanName)
      })
      .catch((error) => {
        console.log(error.response.data)
        setMessageErrorNoLoans(error.response.data)
        setShowMessageErrorNoLoans('')
        setShowForm('hidden')
      })

    axios.get("https://homebanking-luisibanez-deply-back.onrender.com/api/loans/currentClient", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response.data)
        setClientLoans(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
        setMessageErrorNoLoans(error.response.data)
        setShowMessageNoLoansApplied('')
      })
  }, [aux]);

  //Manejador para el cambio de selección de préstamo
  const handleLoanChange = (event) => {
    setAux('')
    setColorErrorInputLoan('')
    setShowInputLoan('hidden')
    const loanName = event.target.value;
    console.log(loanName)
    if (loanName) {
      setShowElement('')
    } else {
      setShowElement('hidden')
      setId(0)
      setDestinyAccount('')
    }
    setSelectedLoanName(loanName);
    console.log('-----------------' + selectedLoanName)


    //Filtrar el préstamo seleccionado
    const selectedLoan = loans.find((loan) => loan.name === loanName);
    if (selectedLoan) {
      setMaxAmount(selectedLoan.maxAmount)
      setPayments(selectedLoan.payments)
      console.log(selectedLoan.name); // Actualizar el maxAmount basado en la selección
      let filteredLoan = selectedLoan;
      console.log('-----------------' + filteredLoan.id)
      let obteinedID = filteredLoan.id;
      setId(obteinedID)
    } else {
      setMaxAmount(0); // Reiniciar maxAmount si no hay coincidencia
      setPayments([])
    }
  };


  return (
    <div>
      <div id="bodyLoan" className="flex flex-col min-h-screen">


        <div className={`${showMessageErrorNoLoans} w-full flex flex-col items-center mb-[30px]`}>
          {/* <h1 className="text-[30px] font-extrabold">{"HOLA"}</h1> */}
          <div id='divNoLoans' className={`${""} mt-[40px] p-[15px] rounded-[30px] w-[1500px]`}>
            <h1 id='h1NoCards' className='text-center text-[30px] p-[10px] font-extrabold rounded-[25px] text-[#e64848]'>{messageErrorNoLoans}</h1>
          </div>
        </div>


        <div
          id="containerAllLoan"
          className={`${showForm} w-full flex flex-row justify-center`}
        >
          <div
            id="containerLoanForm-BackGround"
            className="w-[85%] h-[830px] border-b-4 border-[#07d611] flex flex-row justify-between flex-wrap mt-[10px]"
          >
            <div
              id="containerLoanTitle-Form-Button"
              className="w-[700px] h-[800px]"
            >
              <div id="containerTitleLoan" className="w-full mb-[20px]">
                <h1 className="text-[45px]">
                  Apply for a{" "}
                  <span className="text-[#07d611] font-semibold">LOAN</span>
                </h1>
              </div>

              <div
                id="containerFormLoan"
                className="w-full flex flex-row justify-center h-[745px]"
              >
                <div
                  id="divFormLoan"
                  className="w-[600px] p-8 rounded-lg text-[20px] relative z-10 mb-[30px]"
                >
                  <div className="w-full h-full flex flex-col justify-center">
                    <form onSubmit={handleApplyLoanForm} ref={formRef}>
                      <div className="mb-4">
                        <label htmlFor="loan" className="block text-white font-bold mb-2">
                          Loan
                        </label>
                        <select
                          id="loan"
                          // className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          className={`w-full px-3 py-2 ${colorErrorInputLoan} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          value={selectedLoanName} // Valor controlado
                          onChange={handleLoanChange} // Manejador de cambio
                        >
                          <option value="">Select a loan</option>
                          {/* Con "loans && loans.length > 0" lo que hago es verificar que loans
                              exista antes de realizar el mapeo. De lo contrario podria intentar mapear algo vacio dando error*/}
                          {loans.length > 0 &&
                            loans.map((loan) => {
                              return (
                                <OptionInputSelect
                                  key={loan.id}
                                  value={loan.name}
                                  optionName={loan.name}
                                />
                              );
                            })}
                        </select>
                        <p className={`${showInputLoan} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                      </div>

                      <div className={` mb-4`}>
                        <label
                          htmlFor="sourceAccount"
                          className="block text-white font-bold mb-2"
                        >
                          Origin Account
                        </label>
                        <select
                          id="sourceAccount"
                          value={destinyAccount}
                          onChange={(e) => {
                            setDestinyAccount(e.target.value)
                            setColorErrorInputOriginAccount('')
                            setShowInputOriginAccount('hidden')
                          }}
                          // className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          className={`w-full px-3 py-2 ${colorErrorInputOriginAccount} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="">Select an account</option>
                          {/* Con "client.accounts && client.accounts.length > 0 && client.accounts" lo que hago es verificar que client.accounts
                              exista antes de realizar el mapeo. De lo contrario podria intentar mapear algo vacio dando error*/}
                          {clientAccounts &&
                            clientAccounts.length > 0 &&
                            clientAccounts.map((account) => {
                              return (
                                <OptionInputSelect
                                  key={account.id}
                                  value={account.number}
                                  optionName={account.number}
                                />
                              );
                            })}
                        </select>
                        <p className={`${showInputOriginAccount} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                      </div>

                      {/* Aqui va la logica */}
                      <div className={`${showElement}`}>
                        <InputTypeRange maxAmount={maxAmount} amount={amount} onChange={setAmmount} />
                      </div>

                      <div className={` mb-4`}>
                        <label
                          htmlFor="payment"
                          className="block text-white font-bold mb-2"
                        >
                          Payment
                        </label>
                        <select
                          id="payment"
                          value={selectedInstallments}
                          onChange={(e) => {
                            setSelectedInstallments(e.target.value)
                            setColorErrorInputPayment('')
                            setShowInputPayment('hidden')
                          }}
                          // className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          className={`w-full px-3 py-2 ${colorErrorInputPayment} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="">Select payment</option>
                          {/* Add more options here */}
                          {payments.length > 0 &&
                            payments.map((payment) => {
                              return (
                                <OptionInputSelect
                                  value={payment}
                                  optionName={payment}
                                />
                              );
                            })}
                        </select>
                        <p className={`${showInputPayment} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                      </div>
                      <div id="buttonSubmitLoan" className="mt-[60px]">
                        <ButtonRegisterForm title="Submit" />
                      </div>
                      <div className="w-full mt-[70px] flex flex-row justify-center">
                        <Link to={"/accounts"}>
                          <h1 className="text-[23px] inline-block font-bold text-[red] hover:scale-[110%] ">CANCEL</h1>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div id="divBackGroundLoan" className="w-[850px]  z-20"></div>
          </div>
        </div>


        <div className="w-full flex flex-row justify-center mb-[80px] mt-[30px]">
          <div className="w-[85%]">
            <h1 className="text-[45px] font-semibold">Your <span className="text-[#07d611]">LOANS</span></h1>
            <div>
              <div className={`${showMessageNoLoansApplied} w-full flex flex-col items-center mb-[30px]`}>
                <div id='divNoLoans' className={`${""} mt-[40px] p-[15px] rounded-[30px] w-[1500px]`}>
                  <h1 id='h1NoCards' className='text-center text-[30px] p-[10px] font-extrabold rounded-[25px] text-[#e64848]'>{messageErrorNoLoans}</h1>
                </div>
              </div>
            </div>
            <div id="containerLoansCards" className="w-full flex flex-row justify-between flex-wrap mt-[25px]">
              {clientLoans.length > 0 && clientLoans.map((clientLoan) => {
                let text = clientLoan.description
                // Dividimos el texto en partes separadas por \n
                let lines = text.split('\n')
                // Asignamos cada línea a una variable
                const line1 = lines[0];
                const line2 = lines[1];
                const line3 = lines[2];
                const line4 = lines[3];
                return (<CardLoans amount={clientLoan.amount} name={clientLoan.name} payments={clientLoan.payments} descriptionAmount={line1} descriptionText={line2} descriptionInterest={line3} descriptionTotalPay={line4} />)
              })}
            </div>
          </div>
        </div>

      </div>

      <div className={`${showPopUpAlert}`}>
        <PopUpAlert gif={gif} message={messageShowPopUpAlert} handleOnClick={handleOnClickPopAupAlert} />
      </div>
    </div>
  );
}

export default Loan;
