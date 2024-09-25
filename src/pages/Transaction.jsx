import React, { useEffect } from "react";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import "./Transaction.css";
import { useState } from "react";
import axios from "axios";
import OptionInputSelect from "./OptionInputSelect";
import { useSelector } from "react-redux";
import MoneyDisplay from "../components/MoneyDisplay";
import PopUpAlert from "../components/PopUpAlert";
import checkGif from "../assets/checkGif.gif"

function Transaction() {
  const user = useSelector((store) => store.authenticationReducer);

  const [clientAccounts, setClientAccounts] = useState([]);
  const [selectedAccountNumber, setSelectedAccountNumber] = useState(""); // Estado para almacenar el nombre del préstamo seleccionado
  const [disponibleAccounts, setDisponibleAccounts] = useState([]);

  const [sourceAccount, setSourceAccount] = useState("");
  const [destinyAccount, setDestinyAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [showElement, setShowElement] = useState('hidden')


  const [showPopUpAlert, setShowPopUpAlert] = useState('hidden')
  const [messageShowPopUpAlert, setMessageShowPopUpAlert] = useState('')
  const [gif, setGif] = useState('')
  const [link, setLink] = useState('')

  const [showInputDestinyAccountSelect, setShowInputDestinyAccountSelect] = useState('hidden')
  const [showInputDestinyAccountText, setShowInputDestinyAccountText] = useState('hidden')
  const [showInputOriginAccount, setShowInputOriginAccount] = useState('hidden')
  const [showInputAmount, setShowInputAmount] = useState('hidden')
  const [showInputDescription, setShowInputDescription] = useState('hidden')

  const [colorErrorInputDestinyAccountSelect, setColorErrorInputDestinyAccountSelect] = useState('')
  const [colorErrorInputDestinyAccountText, setColorErrorInputDestinyAccountText] = useState('')
  const [colorErrorInputSourceAccount, setColorErrorInputSourceAccount] = useState('')
  const [colorErrorInputAmount, setColorErrorInputAmount] = useState('')
  const [colorErrorInputDescription, setColorErrorInputDescription] = useState('')

  const [messageErrorInput, setMessageErrorInput] = useState('')


  const handleOnClickPopAupAlert = (e) => {
    setShowPopUpAlert('hidden')
  }

  const handleMakeATransactionForm = async (event) => {
    console.log("Click on button submit");
    event.preventDefault();
    const transactionForm = {
      sourceAccount: sourceAccount,
      destinyAccount: destinyAccount,
      amount: amount,
      description: description,
    };
    console.log("-----------------" + transactionForm);
    console.log("-----------------" + sourceAccount);
    console.log("-----------------" + destinyAccount);
    console.log("-----------------" + amount);
    console.log("-----------------" + description);

    try {
      const token = user.token;
      const response = axios.post(
        "http://localhost:8080/api/transactions",
        transactionForm,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log((await response).data);
      setMessageShowPopUpAlert((await response).data)
      setShowPopUpAlert('')
      setGif(checkGif)
      setLink('/accounts')
    } catch (error) {
      setMessageErrorInput('')
        setColorErrorInputAmount('')
        setShowInputAmount('hidden')
        setColorErrorInputDescription('')
        setShowInputDescription('hidden')
        setColorErrorInputDestinyAccountSelect('')
        setShowInputDestinyAccountSelect('hidden')
        setColorErrorInputDestinyAccountText('')
        setShowInputDestinyAccountText('hidden')
        setColorErrorInputSourceAccount('')
        setShowInputOriginAccount('hidden')
      if (amount == "" && sourceAccount != "" && destinyAccount != "") {
        setMessageErrorInput("Please enter an amount.")
        setColorErrorInputAmount("border-2  border-[red]")
        setShowInputAmount('')
      }
      console.error(error.response ? error.response.data : error.message);
      let errorMessage = error.response ? error.response.data : error.message;
      if (errorMessage.includes("Destiny account") && selectedTransactionType == "Own") {
        
        setMessageErrorInput(errorMessage)
        setShowInputDestinyAccountSelect('')
        setColorErrorInputDestinyAccountSelect('border-2  border-[red]')
      }
      if (selectedTransactionType == "Others") {
        if (errorMessage.includes("Destiny account") || errorMessage.includes("same account")) {
          setMessageErrorInput(errorMessage)
          setShowInputDestinyAccountText('')
          setColorErrorInputDestinyAccountText('border-2  border-[red]')
          setShowInputAmount('hidden')
          setColorErrorInputAmount('')
        } 
      }
      if (errorMessage.includes("Source account")) {
        setMessageErrorInput(errorMessage)
        setShowInputOriginAccount('')
        setColorErrorInputSourceAccount('border-2  border-[red]')
      }
      if (errorMessage.includes("Amount") || errorMessage.includes("enough funds")) {
        setMessageErrorInput(errorMessage)
        setShowInputAmount('')
        setColorErrorInputAmount('border-2  border-[red]')
      }
      if (errorMessage.includes("Description")) {
        setMessageErrorInput(errorMessage)
        setShowInputDescription('')
        setColorErrorInputDescription('border-2  border-[red]')
      }
    }
  };

  useEffect(() => {
    const token = user.token;
    console.log(token);
    axios
      .get("http://localhost:8080/api/clients/current/accounts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClientAccounts(response.data);
        setDisponibleAccounts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //-------------------------------------------------------------------------------------------------------------------------------------
  //Inicializo el estado con "Own" por lo que va a estar seleccionado cuando cargue la pagina
  const [selectedTransactionType, setSelectedTransactionType] = useState("Own"); // Inicializa con "Own"

  // Maneja el cambio del radio button
  const handleTransactionTypeChange = (event) => {
    setDestinyAccount('')
    setSelectedTransactionType(event.target.value); // Actualiza el estado con el valor seleccionado
    if (selectedTransactionType !== "Others") {
      console.log("Others");
      setSelectedAccountNumber("");
      setDisponibleAccounts(clientAccounts);
    }
  };
  //-------------------------------------------------------------------------------------------------------------------------------------

  // Manejador para el cambio de selección de préstamo
  const handleAccountChange = (event) => {
    setColorErrorInputDestinyAccountSelect('')
    setShowInputDestinyAccountSelect('hidden')
    const accountNumber = event.target.value;
    console.log(accountNumber);
    setSelectedAccountNumber(accountNumber);
    setDestinyAccount(accountNumber);
    // Filtrar el préstamo seleccionado
    const selectedAccount = clientAccounts.filter(
      (account) => account.number !== accountNumber
    );
    if (selectedAccount) {
      setDisponibleAccounts(selectedAccount);
      console.log(selectedAccount); // Actualizar el maxAmount basado en la selección
    } else {
      setDisponibleAccounts([]);
    }
  };

  return (
    <div>
      <div id="bodyTransaction" className="flex flex-col min-h-screen">
        <div
          id="containerAllTransaction"
          className="w-full flex flex-row justify-center"
        >
          <div
            id="containerTransactionForm-Background"
            className="w-[85%] border-b-4 border-[#07d611] flex flex-row justify-between flex-wrap mt-[30px]"
          >
            <div
              id="containerTransactionTitle-Form-Button"
              className="w-[700px] h-[840px]"
            >
              <div id="containerTransactionTitle" className="w-full mb-[20px]">
                <h1 className="text-[45px]">
                  Make a{" "}
                  <span className="text-[#07d611] font-semibold">
                    TRANSACTION
                  </span>
                </h1>
              </div>

              <div
                id="containerFormTransaction"
                className="w-full flex flex-row justify-center h-[740px]"
              >
                <div
                  id="divFormTransaction"
                  className="w-[600px] p-8 rounded-lg text-[20px] relative  mb-[30px]"
                >
                  <div className="w-full h-full flex flex-col justify-center">
                    <form onSubmit={handleMakeATransactionForm}>
                      <div className="mb-4">
                        <label
                          htmlFor="transactionType"
                          className="block text-white font-bold mb-2 text-[22px]"
                        >
                          Transaction destiny
                        </label>
                        <div className="flex space-x-4">
                          <label className="text-white">
                            <input
                              type="radio"
                              name="transactionType"
                              value="Own"
                              className="mr-2"
                              checked={selectedTransactionType === "Own"} // Controla el radio button para "Own"
                              onChange={handleTransactionTypeChange}
                            />
                            Own
                          </label>
                          <label className="text-white">
                            <input
                              type="radio"
                              name="transactionType"
                              value="Others"
                              className="mr-2"
                              checked={selectedTransactionType === "Others"} // Controla el radio button para "Others"
                              onChange={handleTransactionTypeChange}
                            />
                            Others
                          </label>
                        </div>
                      </div>

                      {/* Muestra este div cuando "Own" está seleccionado */}
                      {selectedTransactionType === "Own" && (
                        <div>
                          <label
                            htmlFor="destinyAccount"
                            className="block text-white font-bold mb-2"
                          >
                            Destiny Account
                          </label>
                          <select
                            id="destinyAccount"
                            className={`w-full px-3 py-2 ${colorErrorInputDestinyAccountSelect} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            value={selectedAccountNumber} // Valor controlado
                            onChange={handleAccountChange} // Manejador de cambio
                            
                          >
                            <option value="">Select destiny account</option>
                            {/* You can add more options here if needed */}
                            {clientAccounts &&
                              clientAccounts.length > 0 &&
                              clientAccounts.map((account) => {
                                // console.log(account.number)
                                return (
                                  <OptionInputSelect
                                    key={account.id}
                                    value={account.number}
                                    optionName={account.number}
                                  />
                                );
                              })}
                          </select>
                          <p className={`${showInputDestinyAccountSelect} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                        </div>
                      )}

                      {/* Muestra este div cuando "Others" está seleccionado */}
                      {selectedTransactionType === "Others" && (
                        <div className="mb-4">
                          <label
                            htmlFor="destinyAccountOther"
                            className="block text-white font-bold mb-2"
                          >
                            Destiny Account
                          </label>
                          <input
                            type="text"
                            id="destinyAccountOther"
                            value={destinyAccount}
                            onChange={(e) => {
                              setDestinyAccount(e.target.value)
                              setColorErrorInputDestinyAccountText('')
                              setShowInputDestinyAccountText('hidden')
                            }}
                            className={`w-full px-3 py-2 ${colorErrorInputDestinyAccountText} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder="Enter destiny account"

                          />
                          <p className={`${showInputDestinyAccountText} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                        </div>
                      )}

                      <div className="mb-4 mt-[30px]">
                        <label
                          htmlFor="originAccount"
                          className="block text-white font-bold mb-2"
                        >
                          Origin Account
                        </label>
                        <select
                          id="originAccount"
                          value={sourceAccount}
                          onChange={(e) => {
                            setSourceAccount(e.target.value)
                            setColorErrorInputSourceAccount('')
                            setShowInputOriginAccount('hidden')
                          }}
                          className={`w-full px-3 py-2 ${colorErrorInputSourceAccount} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="">Select an account</option>
                          {/* You can add more options here if needed */}
                          {disponibleAccounts.length > 0 &&
                            disponibleAccounts.map((account) => {
                              // console.log(account.number)
                              return (
                                <OptionInputSelect
                                  key={account.id}
                                  optionName={account.number}
                                />
                              );
                            })}
                        </select>
                        <p className={`${showInputOriginAccount} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                      </div>

                      <div className="mb-1 flex flex-row flex-wrap">
                        <label
                          htmlFor="amount"
                          className="w-[400px] block text-white font-bold mb-2"
                        >
                          Amount
                        </label>
                        <input
                          type="number"
                          id="amount"
                          value={amount}
                          onChange={(e) => {
                            setAmount(e.target.value)
                            if(e.target.value != 0) {
                              setShowElement('')
                            }else{
                              setShowElement('hidden')
                            }
                            setColorErrorInputAmount('')
                            setShowInputAmount('hidden')
                            setMessageErrorInput('')
                          }}
                          className={`w-[200px] px-3 py-2 ${colorErrorInputAmount} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          placeholder="$ 0.00"
                         
                              // setMessageErrorInput("Please enter an amount. border-2  border-[red]")
                              // setColorErrorInputAmount("border-2  border-[red]")
                              // setShowInputAmount('')
                        />
                        <span className={`text-white text-[30px] px-[15px] ${showElement}`}><i className="fa-solid fa-right-long"></i></span>
                        <div className={`w-[250px] px-3 py-2 border border-gray-300 rounded-md bg-white ${showElement}`}>
                          <MoneyDisplay amount={amount}/>
                        </div>
                      </div>
                      <p className={`${showInputAmount} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>

                      <div className="mb-[20px] mt-[15px]">
                        <label
                          htmlFor="description"
                          className="block text-white font-bold mb-2"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          id="description"
                          maxLength="70"
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value)
                            setColorErrorInputDescription('')
                            setShowInputDescription('hidden')
                          }}
                          className={`w-full h-[70px] px-3 py-2 ${colorErrorInputDescription} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          placeholder="Enter a brief description (max. 70 characters)"
                          
                        />
                        <p className={`${showInputDescription} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                      </div>

                      <div id="buttonSubmitTransaction" className="mt-[60px]">
                        <ButtonRegisterForm title="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div id="divBackGroundTransaction" className="w-[850px]"></div>
          </div>
        </div>
      </div>
      <div className={`${showPopUpAlert}`}>
        <PopUpAlert gif={gif} message={messageShowPopUpAlert} link={link} handleOnClick={handleOnClickPopAupAlert}/>
      </div>
    </div>
  );
}

export default Transaction;
