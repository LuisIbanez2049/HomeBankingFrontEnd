import React, { useState } from "react";
import Card from "./Card";
import WelcomeMessaje from "./WelcomeMessaje";
import Finance from "../assets/Finance.png";
import RequestAccountButton from "./RequestAccountButton";
import { useEffect } from "react";
import axios from "axios";
import MoneyDisplay from "./MoneyDisplay";
import { Link } from "react-router-dom";

function AccountComponent() {

   // Definir estado para almacenar los datos de clients
   const [clients, setClients] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:8080/api/clients/")
    .then((response) =>{
      setClients(response.data); // Actualiza el estado con los datos recibidos
      console.log(response.data); // Para verificar
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className="relative flex-1">
          <img className="w-[900px] absolute right-[5%] top-[56px] z-10" src={Finance} alt=""/>
          <div className="w-full flex flex-row justify-center my-4 relative z-20">
            { clients.length > 0 && <WelcomeMessaje userName={clients[0].firstName} />}
          </div>
          <div className="w-full flex flex-row justify-center relative z-20">
            <div className="border-t-4 border-[#72cb10] w-[70%] flex flex-col">
              <div className="w-full flex flex-col mt-[30px] ml-[25px]">
              {clients.length > 0 && clients[0].accounts.map((account) => {
                return (
                  <div className="my-[20px]" key={account.id}> 
                    <Card
                      id = {account.id}
                      account={account.number}
                      amount={<MoneyDisplay amount={account.balance}/>}
                      creationDate={account.creationDate.slice(0,10)}
                    />
                  </div>
                );
              })}
              <div className="my-[60px]">
                <RequestAccountButton title="REQUEST ACCOUNT" path = ""/>
              </div>
              
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AccountComponent;
