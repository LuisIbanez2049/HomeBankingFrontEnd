import React from 'react'
import InputPassword from '../components/InputPassword'
import ButtonRegisterForm from '../components/ButtonRegisterForm'
import { Link } from 'react-router-dom'
import "./Login.css"

function Login() {
    return (
        <div>
            <div id="bodyLogin" className="flex flex-col min-h-screen">
                <div id="containerAll" className="w-full flex flex-col justify-center">

                    <div id="containerLogo-Form-Button" className="border-b-4 border-[#07d611] ml-[150px] mt-[50px] w-[700px] h-[800px]">

                        <div id="containerLogo" className="w-full flex flex-row justify-center items-center mb-[20px]">
                            <div id="logo" className="border border-black w-[120px] h-[120px]">

                            </div>
                        </div>

                        <div id="containerFormLogin" className="w-full flex flex-row justify-center h-[680px]">
                            <div id="divFormLogin" className="w-[600px] p-8 rounded-lg text-[20px] relative z-10 mb-[30px]">
                                <div className='w-full h-full flex flex-col justify-center'>
                                    <form>
                                        <div className="mb-20">
                                            <label htmlFor="email" className="block text-white font-bold mb-2">
                                                Email
                                            </label>
                                            <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
                                        </div>
                                        <div>
                                            <InputPassword/>
                                        </div>
                                        <div id="buttonResgister" className="mt-[60px]">
                                            <ButtonRegisterForm title="Login"/>
                                        </div>
                                    </form>
    
                                    <div id="containerLinkLogIn" className="w-full flex flex-col items-center mt-[30px]">
                                        <h1 className="text-white text-center">o</h1>
                                        <Link id="loginButton" to="/register"> <h1 id="h1Login" className=" inline-block text-[25px] font-semibold text-white text-center  hover:text-[#07d611] hover:scale-110">Register</h1> </Link>
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

export default Login