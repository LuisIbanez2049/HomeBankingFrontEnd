import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import InputPassword from "../components/InputPassword";
import SpinOrbit from "../assets/SpinOrbit.png";
import SpinCenter from "../assets/SpinCenter.png";
import axios from "axios";
import PopUpAlert from "../components/PopUpAlert";
import checkGif from "../assets/checkGif.gif"

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPopUpAlert, setShowPopUpAlert] = useState('hidden')
  const [messageShowPopUpAlert, setMessageShowPopUpAlert] = useState('')
  const [gif, setGif] = useState('')
  const [link, setLink] = useState('')

  const [showInputFirstName, setShowInputFirstName] = useState('hidden')
  const [showInputLastName, setShowInputLastName] = useState('hidden')
  const [showInputEmail, setShowInputEmail] = useState('hidden')
  const [showInputPassword, setShowInputPassword] = useState('hidden')

  const [colorErrorInputFirstName, setColorErrorInputFirstName] = useState('')
  const [colorErrorInputLastName, setColorErrorInputLastName] = useState('')
  const [colorErrorInputEmail, setColorErrorInputEmail] = useState('')
  const [colorErrorInputPassword, setColorErrorInputPassword] = useState('')

  const [messageErrorInput, setMessageErrorInput] = useState('')

  const handleOnClickPopAupAlert = (e) => {
    setShowPopUpAlert('hidden')
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(user);
    console.log("-----------------" + firstName);
    console.log("-----------------" + lastName);
    console.log("-----------------" + email);
    console.log("-----------------" + password);

    try {
      const response = await axios.post(
        "https://homebanking-luisibanez-deply-back.onrender.com/api/auth/register",
        user
      );
      console.log(response.data);
      setMessageShowPopUpAlert(response.data)
      setGif(checkGif)
      setShowPopUpAlert('')
      setLink('/login')
    } catch (error) {
      setMessageErrorInput('')
      setShowInputFirstName('hidden')
      setColorErrorInputFirstName('')
      setShowInputLastName('hidden')
      setColorErrorInputLastName('')
      setShowInputEmail('hidden')
      setColorErrorInputEmail('')
      setShowInputPassword('hidden')
      setColorErrorInputPassword('')
      console.error(error.response ? error.response.data : error.message);
      let errorMessage = error.response ? error.response.data : error.message;
      if (errorMessage.includes("First name") || errorMessage.includes("first name")) {
        setMessageErrorInput(errorMessage)
        setShowInputFirstName('')
        setColorErrorInputFirstName('border-2  border-[red]')
      }
      if (errorMessage.includes("Last name") || errorMessage.includes("last name")) {
        setMessageErrorInput(errorMessage)
        setShowInputLastName('')
        setColorErrorInputLastName('border-2  border-[red]')
      }
      if (errorMessage.includes("Email") || errorMessage.includes("email")) {
        setMessageErrorInput(errorMessage)
        setShowInputEmail('')
        setColorErrorInputEmail('border-2  border-[red]')
      }
      if (errorMessage.includes("Password") || errorMessage.includes("password")) {
        setMessageErrorInput(errorMessage)
        setShowInputPassword('')
        setColorErrorInputPassword('border-2  border-[red]')
      }
    }
  };
  return (
    <div>
      <div id="bodyRegister" className="flex flex-col min-h-screen">
        <div
          id="containerAllRegister"
          className="w-full flex flex-row justify-center"
        >
          <div
            id="containerRegisterForm-BackGround"
            className="w-[85%] border-b-4 border-[#07d611] flex flex-row justify-between flex-wrap mt-[40px]"
          >
            <div id="containerRegisterLogo-Form-Button" className="w-[700px]">
              <div
                id="containerLogo"
                className="w-full flex flex-row justify-center items-center mb-[20px]"
              >
                <Link to={"/"}>
                  <div
                    id="logo"
                    className=" w-[120px] h-[120px]"
                  ></div>
                </Link>
              </div>

              <div
                id="containerRegisterForm"
                className="w-full flex flex-row justify-center "
              >
                <div
                  id="divFormRegister"
                  className="w-[600px] p-8 rounded-lg text-[20px] relative z-10 mb-[30px]"
                >
                  <form onSubmit={handleRegister}>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-white font-bold mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value)
                          setColorErrorInputFirstName('')
                          setShowInputFirstName('hidden')
                        }}
                        className={`w-full px-3 py-2 ${colorErrorInputFirstName} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter your first name"
                      />
                      <p className={`${showInputFirstName} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="block text-white font-bold mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value)
                          setColorErrorInputLastName('')
                          setShowInputLastName('hidden')
                        }}
                        className={`w-full px-3 py-2 ${colorErrorInputLastName} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter your last name"
                      />
                      <p className={`${showInputLastName} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-white font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          setColorErrorInputEmail('')
                          setShowInputEmail('hidden')
                        }}
                        className={`w-full px-3 py-2 ${colorErrorInputEmail} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Enter your email"
                      />
                      <p className={`${showInputEmail} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                    </div>
                    <div>
                      <InputPassword value={password} onChange={setPassword} setColorErrorInputPassword = {setColorErrorInputPassword} setShowInputPassword={setShowInputPassword} borderColor={colorErrorInputPassword}/>
                      <p className={`${showInputPassword} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
                    </div>
                    <div id="buttonResgister" className="mt-[60px]">
                      <ButtonRegisterForm title="Register" />
                    </div>
                  </form>

                  <div
                    id="containerLinkLogIn"
                    className="w-full flex flex-col items-center mt-[30px]"
                  >
                    <h1 className="text-white text-center">o</h1>
                    <Link id="loginButton" to="/login">
                      {" "}
                      <h1
                        id="h1Register"
                        className=" inline-block text-[25px] font-semibold text-white text-center  hover:text-[#07d611] hover:scale-110"
                      >
                        Login
                      </h1>{" "}
                    </Link>
                  </div>
                </div>

                <img
                  id="spinImg"
                  src={SpinOrbit}
                  className="absolute w-[591px] left-[490px] bottom-[60px] z-0"
                  alt=""
                />
                <img
                  src={SpinCenter}
                  className="absolute w-[390px] left-[635px] bottom-[160px] z-0"
                  alt=""
                />
              </div>
            </div>

            <div id="divBackGroundRegister" className="w-[850px] z-20"></div>
          </div>
        </div>
      </div>
      <div className={`${showPopUpAlert}`}>
        <PopUpAlert gif={gif} message={messageShowPopUpAlert} link={link} handleOnClick={handleOnClickPopAupAlert}/>
      </div>
    </div>
  );
}

export default Register;
