import React from "react";
import Card from "./Card";
import WelcomeMessaje from "./WelcomeMessaje";
import Finance from "../assets/Finance.png";
import RequestAccountButton from "./RequestAccountButton";

function AccountComponent() {
  let clients = [
    {
      name: "Melba",
      account: "VIN-00001",
      amount: "$25,0000.00",
      creationDate: "25/05/23",
    },
    {
      name: "-",
      account: "VIN-00002",
      amount: "$150,000.0",
      creationDate: "26/05/23",
    },
    {
      name: "-",
      account: "VIN-00003",
      amount: "$300,000.0",
      creationDate: "27/05/23",
    },
    {
      name: "-",
      account: "VIN-00004",
      amount: "$100,000.0",
      creationDate: "28/05/23",
    },
  ];

  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className="relative flex-1">
          <img className="w-[900px] absolute right-[5%] top-[56px] z-10" src={Finance} alt=""/>
          <div className="w-full flex flex-row justify-center my-4 relative z-20">
            <WelcomeMessaje userName={clients[0].name} />
          </div>
          <div className="w-full flex flex-row justify-center relative z-20">
            <div className="border-t-4 border-[#72cb10] w-[70%] flex flex-row flex-wrap justify-between">
              {clients.map((client) => {
                return (
                  <Card
                    key={client.account} // ------------------------------------------------Preguntaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrr-------------------
                    account={client.account}
                    amount={client.amount}
                    creationDate={client.creationDate}
                  />
                );
              })}
            </div>
          </div>

          <div className="w-full flex flex-row justify-center relative z-20 my-12">
            <div className=" w-[70%] flex flex-row flex-wrap justify-between">
              <RequestAccountButton/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AccountComponent;
