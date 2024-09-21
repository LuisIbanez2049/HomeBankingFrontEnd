import React from "react";
import "./Loan.css";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import OptionInputSelect from "./OptionInputSelect";
import InputTypeRange from "../components/InputTypeRange";
import { useSelector } from "react-redux";
import store from "../redux/store";
function Loan() {
  const [clientAccounts, setClientAccounts] = useState([])
  const [loans , setLoans] = useState([])
  const [selectedLoanName, setSelectedLoanName] = useState(""); // Estado para almacenar el nombre del préstamo seleccionado
  const [maxAmount, setMaxAmount] = useState(0); // Estado para almacenar el maxAmount
  const [payments, setPayments] = useState([])

  const user = useSelector(store => store.authenticationReducer)
  const [id, setId] = useState(0)
  const [amount, setAmmount] = useState(1000)
  const [selectedInstallments, setSelectedInstallments] = useState(0)
  const [destinyAccount, setDestinyAccount] = useState('')

  const handleApplyLoanForm = async (event) => {
    console.log("click on button submit" + loans)
    event.preventDefault();
    const applyLoanForm = {
      id: id, 
      amount: amount,
      installment: selectedInstallments,
      destinyAccount: destinyAccount
    }
    console.log("-----------"  + loans)
    console.log('-----------------' + applyLoanForm)
    console.log('-----------------' + id)
    console.log('-----------------' + amount)
    console.log('-----------------' + selectedInstallments)
    console.log('-----------------' + destinyAccount)

    try{
      const token = user.token;
      const response = await axios.post('http://localhost:8080/api/loans/', applyLoanForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
    } catch (error) {
      console.error('Error al aplicar el prestamo:', error.response ? error.response.data : error.message);
    }
  }
  useEffect(() => {

    const token = user.token;
    console.log(token)


    axios.get('http://localhost:8080/api/clients/current/accounts', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setClientAccounts(response.data); // Actualiza el estado con los datos recibidos
        console.log(response.data); // Para verificar
      })
      .catch((error) => {
        console.log(error);
      });


      axios.get("http://localhost:8080/api/loans/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        setLoans(response.data)
        console.log(response.data)
        console.log('-----------------' +  selectedLoanName)
        let filteredLoan = response.data.find(aLoan => aLoan.name === selectedLoanName); 
        console.log('-----------------' + filteredLoan.id)
        let obteinedID = filteredLoan.id;
        setId(obteinedID) 
      })
      .catch((error) =>{
        console.log(error)
      })
  }, []);

    //Manejador para el cambio de selección de préstamo
    const handleLoanChange = (event) => {
      const loanName = event.target.value;
      console.log(loanName)
      setSelectedLoanName(loanName);
  
      //Filtrar el préstamo seleccionado
      const selectedLoan = loans.find((loan) => loan.name === loanName);
      if (selectedLoan) {
        setMaxAmount(selectedLoan.maxAmount)
        setPayments(selectedLoan.payments)
        console.log(selectedLoan.name); // Actualizar el maxAmount basado en la selección
      } else {
        setMaxAmount(0); // Reiniciar maxAmount si no hay coincidencia
        setPayments([])
      }
    };


  return (
    <div>
      <div id="bodyLoan" className="flex flex-col min-h-screen">
        <div
          id="containerAllLoan"
          className="w-full flex flex-row justify-center"
        >
          <div
            id="containerLoanForm-BackGround"
            className="w-[85%] border-b-4 border-[#07d611] flex flex-row justify-between flex-wrap mt-[30px]"
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
                className="w-full flex flex-row justify-center h-[680px]"
              >
                <div
                  id="divFormLoan"
                  className="w-[600px] p-8 rounded-lg text-[20px] relative z-10 mb-[30px]"
                >
                  <div className="w-full h-full flex flex-col justify-center">
                    <form onSubmit={handleApplyLoanForm}>
                      <div className="mb-4">
                        <label htmlFor="loan" className="block text-white font-bold mb-2">
                          Loan
                        </label>
                        <select
                          id="loan"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
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
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="sourceAccount"
                          className="block text-white font-bold mb-2"
                        >
                          Origin Account
                        </label>
                        <select
                          id="sourceAccount"
                          value={destinyAccount}
                          onChange={(e) => setDestinyAccount(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select an account</option>
                          {/* Con "client.accounts && client.accounts.length > 0 && client.accounts" lo que hago es verificar que client.accounts
                              exista antes de realizar el mapeo. De lo contrario podria intentar mapear algo vacio dando error*/}
                          { clientAccounts &&
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
                      </div>

                      {/* Aqui va la logica */}
                      <InputTypeRange maxAmount={maxAmount} amount={amount} onChange={setAmmount}/>

                      <div className="mb-4">
                        <label
                          htmlFor="payment"
                          className="block text-white font-bold mb-2"
                        >
                          Payment
                        </label>
                        <select
                          id="payment"
                          value={selectedInstallments}
                          onChange={(e) => setSelectedInstallments(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
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
                      </div>
                      <div id="buttonSubmitLoan" className="mt-[60px]">
                        <ButtonRegisterForm title="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div id="divBackGroundLoan" className="w-[850px]  z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan;
