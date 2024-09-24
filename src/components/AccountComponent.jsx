import React, { useState } from "react";
import Card from "./Card";
import WelcomeMessaje from "./WelcomeMessaje";
import Finance from "../assets/Finance.png";
import RequestAccountButton from "./RequestAccountButton";
import { useEffect } from "react";
import axios from "axios";
import MoneyDisplay from "./MoneyDisplay";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../redux/store";
import ConfirmationPopUpAlert from "./ConfirmationPopUpAlert";
import PopUpAlert from "./PopUpAlert";
import checkGif from "../assets/checkGif.gif"
import xGif from "../assets/xGif.gif"

function AccountComponent() {
  const user = useSelector((store) => store.authenticationReducer);

  // Definir estado para almacenar los datos de clients
  const [clientAccounts, setClientAccounts] = useState([]);
  let [upDate, setUpDate] = useState(0);
  const [showConfirmationPopUpAlert, setShowConfirmationPopUpAlert] =useState("hidden");
  const [showPopUpAlert, setShowPopUpAlert] = useState('hidden')
  const [messageShowPopUpAlert, setMessageShowPopUpAlert] = useState('')
  const [gif, setGif] = useState('')

  const token = user.token;
  console.log(token);
  const getAccounts = () => {
    axios.get("http://localhost:8080/api/clients/current/accounts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setClientAccounts(response.data); // Actualiza el estado con los datos recibidos
        console.log(response.data); // Para verificar
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("Me ejecuto");
    getAccounts();
  }, [upDate]);

  const handelOnClickConfirmation = (e) => {
    setShowConfirmationPopUpAlert("hidden");
    console.log("Click on confirmation");
      const token = user.token;
      axios.post(
        "http://localhost:8080/api/clients/current/accounts",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        setMessageShowPopUpAlert(response.data)
        setGif(checkGif)
        setShowPopUpAlert('')
        getAccounts();
      })
      .catch((error) => {
        console.log(error.response.data)
        setMessageShowPopUpAlert(error.response.data)
        setShowPopUpAlert('')
        setGif(xGif)
      })

      // Incrementa el estado de upDate para forzar el efecto
      setUpDate((prevUpDate) => prevUpDate + 1); // Usa el valor anterior y lo incrementa
  }
  
  const handelOnClickCancel = (e) => {
    setShowConfirmationPopUpAlert('hidden');
  }
  const handleOnClickPopAupAlert = (e) => {
    setShowPopUpAlert('hidden')
  }
  const handelOnClick = async (e) => {
    console.log("Hice click en el boton");
    setShowConfirmationPopUpAlert("");
  };

  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className="relative flex-1">
          <img
            className="w-[900px] absolute right-[5%] top-[56px] z-10"
            src={Finance}
            alt=""
          />
          <div className="w-full flex flex-row justify-center my-4 relative z-20">
            {clientAccounts.length > 0 && (
              <WelcomeMessaje userName={user.name} />
            )}
          </div>
          <div className="w-full flex flex-row justify-center relative z-20">
            <div className="border-t-4 border-[#72cb10] w-[70%] flex flex-col">
              <div className="w-full flex flex-col mt-[30px] ml-[25px]">
                {clientAccounts &&
                  clientAccounts.length > 0 &&
                  clientAccounts.map((account) => {
                    return (
                      <div className="my-[20px]" key={account.id}>
                        <Card
                          id={account.id}
                          account={account.number}
                          amount={<MoneyDisplay amount={account.balance} />}
                          creationDate={account.creationDate.slice(0, 10)}
                        />
                      </div>
                    );
                  })}
                <div className="my-[60px]">
                  <RequestAccountButton
                    handelOnClick={handelOnClick}
                    title="REQUEST ACCOUNT"
                    path=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${showConfirmationPopUpAlert}`}>
        <ConfirmationPopUpAlert message={"ARE YOU SURE TO CREATE A NEW ACCOUNT?"} handleOnClickAccept={handelOnClickConfirmation} handleOnClickCancel={handelOnClickCancel}/>
      </div>
      <div className={`${showPopUpAlert}`}>
        <PopUpAlert gif={gif} message={messageShowPopUpAlert} handleOnClick={handleOnClickPopAupAlert}/>
      </div>
    </div>
  );
}

export default AccountComponent;
