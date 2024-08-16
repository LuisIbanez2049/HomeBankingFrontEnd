import React from 'react';
import Card from './Card';
import WelcomeMessaje from './WelcomeMessaje';
import Finance from "../assets/Finance.png";
import "./Main.css";

function Main() {


  let transactions = [
    {
        name: "Melba",
        account: "VIN-00001",
        amount: "$25,0000.00",
        creationDate: "25/05/23"
    },
    {
        account: "VIN-00002",
        amount: 150000.00,
        creationDate: "26/05/23"
    },
    {
        account: "VIN-00003",
        amount: 300000.00,
        creationDate: "27/05/23"
    },
    {
        account: "VIN-00004",
        amount: 100000.00,
        creationDate: "28/05/23"
    }
];

  return (
    <body className='flex flex-col min-h-screen'>
          <main className='relative flex-1'>
      <img className='w-[900px] absolute right-[5%] top-[56px] z-10' src={Finance} alt="" />
      
      <div className='w-full flex flex-row justify-center my-4 relative z-20'>
       <WelcomeMessaje userName = {transactions[0].name}/>
      </div>
      <div className='w-full flex flex-row justify-center relative z-20'>
       <div className="border-t-4 border-[#72cb10] w-[70%] flex flex-row flex-wrap justify-between">
         {transactions.map((transaction) => {
           return (<Card 
             account = {transaction.account}
             amount = {transaction.amount}
             creationDate = {transaction.creationDate} />)
         })}
       </div>
      </div>
      
    </main>
    </body>
  )
}

export default Main