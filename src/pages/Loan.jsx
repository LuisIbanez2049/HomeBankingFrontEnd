import React from "react";
import "./Loan.css";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import OptionInputSelect from "./OptionInputSelect";
import InputTypeRange from "../components/InputTypeRange";
function Loan() {
  // Defino el estado inicial con las mismas propiedades que el objeto que me devuelve la solicitud "{ loans: [], accounts: [] }" para asegurarme de que client siempre
  // tenga las propiedades loans y accounts, incluso antes de que se complete la petición GET. Esto ayuda a evitar errores al intentar mapear o acceder
  // a estas propiedades antes de que los datos sean cargados.
  const [client, setClient] = useState({ loans: [], accounts: [] });

  useEffect(() => {
    axios.get("http://localhost:8080/api/clients/1")
      .then((response) => {
        setClient(response.data); // Actualiza el estado con los datos recibidos
        console.log(response.data); // Para verificar
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div id="bodyLoan" className="flex flex-col min-h-screen">
        <div className="border border-[#72cb10] w-[180px] absolute top-[31px] left-[1088px]"></div>{" "}
        {/* ----------------------------------------------------------- */}
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
                    <form>
                      <div className="mb-4">
                        <label
                          htmlFor="loan"
                          className="block text-white font-bold mb-2"
                        >
                          Loan
                        </label>
                        <select
                          id="loan"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select a loan</option>
                          {/* Con "client.loans && client.loans.length > 0 && client.loans" lo que hago es verificar que client.loans
                              exista antes de realizar el mapeo. De lo contrario podria intentar mapear algo vacio dando error*/}
                          {client.loans &&
                            client.loans.length > 0 &&
                            client.loans.map((loan) => {
                              // console.log(loan.name)
                              return (
                                <OptionInputSelect
                                  key={loan.id}
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select an account</option>
                          {/* Con "client.accounts && client.accounts.length > 0 && client.accounts" lo que hago es verificar que client.accounts
                              exista antes de realizar el mapeo. De lo contrario podria intentar mapear algo vacio dando error*/}
                          {client.accounts &&
                            client.accounts.length > 0 &&
                            client.accounts.map((account) => {
                              return (
                                <OptionInputSelect
                                  key={account.id}
                                  optionName={account.number}
                                />
                              );
                            })}
                        </select>
                      </div>

                      <InputTypeRange maxAmount={500000}/>

                      <div className="mb-4">
                        <label
                          htmlFor="payment"
                          className="block text-white font-bold mb-2"
                        >
                          Payment
                        </label>
                        <select
                          id="payment"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Select payment</option>
                          {/* Add more options here */}
                          {client.loans &&
                            client.loans.length > 0 &&
                            client.loans.map((loan) => {
                              return (
                                <OptionInputSelect
                                  key={loan.id}
                                  optionName={loan.payments}
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
