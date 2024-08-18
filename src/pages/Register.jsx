import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import InputPassword from "../components/InputPassword";

function Register() {
  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className=""></div>
        <div id="containerAll" className="w-full flex flex-col justify-center">
          <div id="containerLogo-Form-Button" className="border border-black ml-[150px] mt-[50px] w-[700px]">
            <div id="containerLogo" className="w-full flex flex-row justify-center items-center">
              <div id="logo" className="border border-black w-[120px] h-[120px]">

              </div>
            </div>

            <div id="containerForm" className="w-full border border-black flex flex-row justify-center">
              <div id="divForm" className="w-[600px] p-8 rounded-lg shadow-md text-[20px]">
                <form>
                  <div className="mb-4">
                    <label htmlFor="firstName" className="block text-white font-bold mb-2">
                      First Name
                    </label>
                    <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your first name" required/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastName" className="block text-white font-bold mb-2">
                      Last Name
                    </label>
                    <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your last name" required/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-white font-bold mb-2">
                      Email
                    </label>
                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required/>
                  </div>
                  <div>
                    <InputPassword/>
                  </div>
                  <div id="buttonResgister" className="mt-[60px]">
                    <ButtonRegisterForm title="Register"/>
                  </div>
                </form>

                <div id="containerLinkLogIn" className="w-full flex flex-col items-center mt-[30px]">
                  <h1 className="text-white text-center">o</h1>
                  <Link id="loginButton" to="/login"> <h1 id="h1Login" className=" inline-block text-[25px] font-semibold text-white text-center  hover:text-[#07d611] hover:scale-110">Login</h1> </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
