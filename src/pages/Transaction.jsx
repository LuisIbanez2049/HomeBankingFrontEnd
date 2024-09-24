import React, { useEffect } from "react";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import "./Transaction.css";
import { useState } from "react";
import axios from "axios";
import OptionInputSelect from "./OptionInputSelect";
import { useSelector } from "react-redux";
import MoneyDisplay from "../components/MoneyDisplay";
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
      console.log(response);
    } catch (error) {
      console.error(
        "Error al realizar la transacción:",
        error.response ? error.response.data : error.message
      );
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            value={selectedAccountNumber} // Valor controlado
                            onChange={handleAccountChange} // Manejador de cambio
                            onInvalid={(e) =>
                              e.target.setCustomValidity(
                                "Please select a destiny account."
                              )
                            }
                            onInput={(e) =>
                              e.target.setCustomValidity("")
                            } // Restaura el mensaje predeterminado
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
                            onChange={(e) => setDestinyAccount(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter destiny account"
                            required
                            onInvalid={(e) =>
                              e.target.setCustomValidity(
                                "Please select a destiny account."
                              )
                            }
                            onInput={(e) =>
                              e.target.setCustomValidity("")
                            } // Restaura el mensaje predeterminado
                          />
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
                          onChange={(e) => setSourceAccount(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                          onInvalid={(e) =>
                            e.target.setCustomValidity(
                              "Please select a origin account."
                            )
                          }
                          onInput={(e) =>
                            e.target.setCustomValidity("")
                          } // Restaura el mensaje predeterminado
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
                      </div>

                      <div className="mb-4 flex flex-row flex-wrap">
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
                          }}
                          className="w-[200px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="$ 0.00"
                          required
                          onInvalid={(e) =>
                            e.target.setCustomValidity(
                              "Please enter an amount greater than 0."
                            )
                          }
                          onInput={(e) =>
                            e.target.setCustomValidity("")
                          } // Restaura el mensaje predeterminado
                        />
                        <span className={`text-white text-[30px] px-[15px] ${showElement}`}><i className="fa-solid fa-right-long"></i></span>
                        <div className={`w-[250px] px-3 py-2 border border-gray-300 rounded-md bg-white ${showElement}`}>
                          <MoneyDisplay amount={amount}/>
                        </div>
                      </div>

                      <div className="mb-20">
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
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full h-[70px] px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter a brief description (max. 70 characters)"
                          required
                          onInvalid={(e) =>
                            e.target.setCustomValidity(
                              "Please provide a description."
                            )
                          }
                          onInput={(e) =>
                            e.target.setCustomValidity("")
                          } // Restaura el mensaje predeterminado
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

            <div id="divBackGroundTransaction" className="w-[850px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
