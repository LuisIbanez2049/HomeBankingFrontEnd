import React, { useState } from "react";
import InputPassword from "../components/InputPassword";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import { Link } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actions/authenticationAction";
import axios from "axios";
import PopUpAlert from "../components/PopUpAlert";
import checkGif from "../assets/checkGif.gif";
import xGif from "../assets/xGif.gif";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [showPopUpAlert, setShowPopUpAlert] = useState("hidden");
  const [messageShowPopUpAlert, setMessageShowPopUpAlert] = useState("");
  const [gif, setGif] = useState("");
  const [link, setLink] = useState("");

  const [showInputErrorEmail, setShowInputErrorEmail] = useState("hidden");
  const [showInputPassword, setShowInputPassword] = useState("hidden");

  const [colorErrorInputEmail, setColorErrorInputEmail] = useState("");
  const [colorErrorInputPassword, setColorErrorInputPassword] = useState("");

  const [messageErrorInput, setMessageErrorInput] = useState("");

  const handleOnClickPopAupAlert = (e) => {
    setShowPopUpAlert("hidden");
  };

  // Manejar el envío del formulario
  const handleLogin = async (event) => {
    event.preventDefault(); // Evita que la página se recargue

    const user = {
      email: email,
      password: password,
    };

    console.log(user);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );
      console.log(response);

      // Si el login es exitoso, guarda la respuesta (token, etc.)
      dispatch(loginAction(response.data)); // Maneja el login con Redux
      setMessageShowPopUpAlert(
        <>
          <span className="font-extrabold">
            LOGIN SUCCESSFUL <br /> Welcome{" "}<p className="text-[#26a026] font-extrabold inline-block">{response.data[1]}</p>
          </span>
        </>
      );
      setGif(checkGif);
      setShowPopUpAlert("");
      setLink("/accounts");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      let erroMessage = error.response ? error.response.data : error.message;
      if (erroMessage.includes("invalid")) {
        setMessageShowPopUpAlert(
          <>
            <p className="text-[#9e1919] font-extrabold inline-block">
              {erroMessage}
            </p>{" "}
          </>
        );
        setGif(xGif);
        setShowPopUpAlert("");
        setLink("");
      }
      if (erroMessage.includes("provide")) {
        setMessageErrorInput(erroMessage)
        setShowInputErrorEmail('')
        setColorErrorInputEmail('border-2  border-[red]')
      }
      if (erroMessage.includes("enter")) {
        setMessageErrorInput(erroMessage)
        setShowInputPassword('')
        setColorErrorInputPassword('border-2  border-[red]')
      }
    }
  };
  

  
  return (
    <div>
      <div id="bodyLogin" className="flex flex-col min-h-screen">
        <div id="containerAll" className="w-full flex flex-row justify-center">
          <div
            id="containerLoginForm-backGround"
            className="w-[85%] border-b-4 border-[#07d611] flex flex-row justify-between flex-wrap mt-[30px]"
          >
            <div id="containerLogo-Form-Button" className="w-[700px] h-[800px]">
              <div
                id="containerLogo"
                className="w-full flex flex-row justify-center items-center mb-[20px]"
              >
                <div
                  id="logo"
                  className="border border-black w-[120px] h-[120px]"
                ></div>
              </div>

              <div
                id="containerFormLogin"
                className="w-full flex flex-row justify-center h-[680px]"
              >
                <div
                  id="divFormLogin"
                  className="w-[600px] p-8 rounded-lg text-[20px] relative z-10 mb-[30px]"
                >
                  <div className="w-full h-full flex flex-col justify-center">
                    <form onSubmit={handleLogin}>
                      <div className="mb-20">
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
                            setShowInputErrorEmail('hidden')
                            setColorErrorInputEmail('')
                          }} // Actualiza el estado de email
                          // className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          className={`w-full px-3 py-2 ${colorErrorInputEmail} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          placeholder="example@example.com"
                        />
                        <p
                          className={`${showInputErrorEmail} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}
                        >
                          &#10071;{messageErrorInput}
                        </p>
                      </div>
                      <div>
                        <InputPassword
                          value={password}
                          onChange={setPassword}
                          setColorErrorInputPassword={
                            setColorErrorInputPassword
                          }
                          setShowInputPassword={setShowInputPassword}
                          borderColor={colorErrorInputPassword}
                        />
                        <p className={`${showInputPassword} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}> &#10071;{messageErrorInput}</p>
                      </div>
                      <div id="buttonResgister" className="mt-[60px]">
                        <ButtonRegisterForm title="Login" />
                      </div>
                    </form>

                    <div
                      id="containerLinkLogIn"
                      className="w-full flex flex-col items-center mt-[30px]"
                    >
                      <h1 className="text-white text-center">o</h1>
                      <Link id="loginButton" to="/register">
                        <h1
                          id="h1Login"
                          className="inline-block text-[25px] font-semibold text-white text-center hover:text-[#07d611] hover:scale-110"
                        >
                          Register
                        </h1>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="divBackGroundLogin" className="w-[850px] z-20"></div>
          </div>
        </div>
      </div>
      <div className={`${showPopUpAlert}`}>
        <PopUpAlert
          gif={gif}
          message={messageShowPopUpAlert}
          link={link}
          handleOnClick={handleOnClickPopAupAlert}
        />
      </div>
    </div>
  );
}

export default Login;
