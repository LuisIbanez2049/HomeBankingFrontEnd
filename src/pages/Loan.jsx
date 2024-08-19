import React from 'react'
import "./Loan.css"
import ButtonRegisterForm from '../components/ButtonRegisterForm'
function Loan() {
    return (
        <div>
            <div id="bodyLoan" className="flex flex-col min-h-screen">
                <div id='containerAllLoan' className='w-full flex flex-row justify-center'>
                    <div id='containerLoanForm-BackGround' className='w-[85%] border-b-4 border-[#07d611] flex flex-row justify-between flex-wrap mt-[30px]'>
                        <div id="containerLoanTitle-Form-Button" className="w-[700px] h-[800px]">

                            <div id="containerTitleLoan" className="w-full mb-[20px]">
                                <h1 className="text-[45px]">Apply for a <span className="text-[#07d611] font-semibold">LOAN</span></h1>
                            </div>

                            <div id="containerFormLoan" className="w-full flex flex-row justify-center h-[680px]">
                                <div id="divFormLoan" className="w-[600px] p-8 rounded-lg text-[20px] relative z-10 mb-[30px]">
                                    <div className='w-full h-full flex flex-col justify-center'>
                                        <form>
                                            <div className="mb-4">
                                                <label htmlFor="loan" className="block text-white font-bold mb-2">
                                                    Loan
                                                </label>
                                                <select
                                                    id="loan"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                >
                                                    <option value="">Select a loan</option>
                                                    {/* Add more options here */}
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="sourceAccount" className="block text-white font-bold mb-2">
                                                    Origin Account
                                                </label>
                                                <select
                                                    id="sourceAccount"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                >
                                                    <option value="">Select an account</option>
                                                    {/* Add more options here */}
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="amount" className="block text-white font-bold mb-2">
                                                    Amount
                                                </label>
                                                <input
                                                    type="range"
                                                    id="amount"
                                                    className="w-full"
                                                    min="0"
                                                    max="100000"
                                                    step="100"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="payment" className="block text-white font-bold mb-2">
                                                    Payment
                                                </label>
                                                <select
                                                    id="payment"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                >
                                                    <option value="">Select payment</option>
                                                    {/* Add more options here */}
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

                        <div id='divBackGroundLoan' className='w-[850px]  z-20'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loan