import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import ButtonRegisterForm from "../components/ButtonRegisterForm";
import InputPassword from "../components/InputPassword";
import SpinOrbit from "../assets/SpinOrbit.png";
import SpinCenter from "../assets/SpinCenter.png";
import axios from "axios";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        "http://localhost:8080/api/auth/register",
        user
      );
      console.log(response);
    } catch (error) {
      console.error(
        "Error en el registro:",
        error.response ? error.response.data : error.message
      );
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
                <div
                  id="logo"
                  className="border border-black w-[120px] h-[120px]"
                ></div>
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
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your first name"
                        required
                        onInvalid={(e) => {
                          if (e.target.value === "") {
                            e.target.setCustomValidity(
                              "Please fill in this field."
                            );
                          } else if (e.target.value.length < 1) {
                            e.target.setCustomValidity(
                              "Please enter at least 2 characters."
                            );
                          }
                        }}
                        onInput={(e) => e.target.setCustomValidity("")} //Restaura el mensaje predeterminado
                      />
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
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your last name"
                        required
                        onInvalid={(e) => {
                          if (e.target.value === "") {
                            e.target.setCustomValidity(
                              "Please fill in this field."
                            );
                          }
                        }}
                        onInput={(e) => e.target.setCustomValidity("")} //Restaura el mensaje predeterminado
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-white font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                        onInvalid={(e) => {
                          if (e.target.value === "") {
                            e.target.setCustomValidity("Please fill in this field.");
                          } else if (!e.target.value.includes("@")) {
                            e.target.setCustomValidity("Please enter a valid email. Email must contain an '@' character.");
                          } else if (!e.target.value.includes(".") && !e.target.value.includes(".com") && !e.target.value.includes(".net") && !e.target.value.includes(".org") && !e.target.value.includes(".info") && !e.target.value.includes(".co")) {
                            e.target.setCustomValidity("Please enter a valid domain extension.");
                          } else {
                            e.target.setCustomValidity("Please provide a valid domain since 'gmail', 'yahoo', etc.");
                          }
                        }
                        }
                        onInput={(e) =>
                          e.target.setCustomValidity("")
                        } // Restaura el mensaje predeterminado
                      />
                    </div>
                    <div>
                      <InputPassword value={password} onChange={setPassword} />
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
                  className="absolute w-[591px] left-[490px] bottom-[31px] z-0"
                  alt=""
                />
                <img
                  src={SpinCenter}
                  className="absolute w-[390px] left-[635px] bottom-[130px] z-0"
                  alt=""
                />
              </div>
            </div>

            <div id="divBackGroundRegister" className="w-[850px] z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
