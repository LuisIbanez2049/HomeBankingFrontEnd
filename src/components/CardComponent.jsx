import React, { useEffect, useState } from 'react'
import "./CardComponent.css"
import CardDebitCredit from './CardDebitCredit'
import RequestAccountButton from "./RequestAccountButton";
import { useSelector } from 'react-redux';
import axios from 'axios';

{/*       
          props.backGroundCard (fondo de la tarjeta  {CardDebitCreditGold, CardDebitCreditSilver, CardDebitCreditTitanium})  
          props.typeSubBackGround  (tipo de desenfoque del fondo  {granuladoGold,  granuladoSilver,  granuladoTitanium})
          props.typeCard (nombre de tipo de carta  {Credit Card,  Debit Card})
          props.numbers  (16 digitos de la tarjeta)
          props.fromDate  (fecha en la que se creo la carta)
          props.thruDate  (fecha de expiracion de la tarjeta)
          props.fullName  (nombre completo del titular)
          props.cvv  (numero de seguridad de 3 digitos)    
      */}

function CardComponent() {
  
  const user = useSelector(store => store.authenticationReducer)
  const [clientCards, setClientCards] = useState([]);

  useEffect(() => {
    const token = user.token;
    console.log(token)
    axios.get('http://localhost:8080/api/clients/current/cards', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      setClientCards(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  // let client = [
  //   {
  //     "id": 1,
  //     "firstName": "Melba",
  //     "lastName": "Morel",
  //     "email": "melba@mindhub.com",
  //     "accounts": [
  //       {
  //         "id": 1,
  //         "number": "VIN001",
  //         "creationDate": "2024-08-19T23:52:27.260649",
  //         "balance": 5000.0,
  //         "transactios": [
  //           {
  //             "id": 1,
  //             "amount": 2000.0,
  //             "description": "Rent",
  //             "dateTime": "2024-08-19T23:52:27.260649",
  //             "type": "CREDIT"
  //           },
  //           {
  //             "id": 2,
  //             "amount": 500.0,
  //             "description": "Groceries",
  //             "dateTime": "2024-08-18T23:52:27.260649",
  //             "type": "DEBIT"
  //           },
  //           {
  //             "id": 3,
  //             "amount": 1500.0,
  //             "description": "Salary",
  //             "dateTime": "2024-08-17T23:52:27.260649",
  //             "type": "CREDIT"
  //           }
  //         ]
  //       },
  //       {
  //         "id": 2,
  //         "number": "VIN002",
  //         "creationDate": "2024-08-20T23:52:27.260649",
  //         "balance": 7500.0,
  //         "transactios": [
  //           {
  //             "id": 6,
  //             "amount": 700.0,
  //             "description": "Internet Bill",
  //             "dateTime": "2024-08-15T23:52:27.260649",
  //             "type": "DEBIT"
  //           },
  //           {
  //             "id": 5,
  //             "amount": 2500.0,
  //             "description": "Freelance Work",
  //             "dateTime": "2024-08-16T23:52:27.260649",
  //             "type": "CREDIT"
  //           },
  //           {
  //             "id": 4,
  //             "amount": 800.0,
  //             "description": "Electricity Bill",
  //             "dateTime": "2024-08-19T23:52:27.260649",
  //             "type": "DEBIT"
  //           }
  //         ]
  //       }
  //     ],
  //     "loans": [
  //       {
  //         "id": 1,
  //         "loanId": 1,
  //         "payments": 60,
  //         "name": "Mortgage",
  //         "amount": 400000.0
  //       },
  //       {
  //         "id": 2,
  //         "loanId": 2,
  //         "payments": 12,
  //         "name": "Personal",
  //         "amount": 50000.0
  //       }
  //     ],
  //     "cards": [
  //       {
  //         "id": 1,
  //         "cardHolader": "Melba Morel",
  //         "type": "DEBIT",
  //         "color": "GOLD",
  //         "number": "5741-3936-3890-7471",
  //         "cvv": 723,
  //         "fromDate": "2024-08-19",
  //         "thruDate": "2029-08-19"
  //       },
  //       {
  //         "id": 2,
  //         "cardHolader": "Antonio Guzman",
  //         "type": "CREDIT",
  //         "color": "TITANIUM",
  //         "number": "2923-8134-8693-7624",
  //         "cvv": 915,
  //         "fromDate": "2024-08-19",
  //         "thruDate": "2029-08-19"
  //       },
  //       {
  //         "id": 3,
  //         "cardHolader": "Luis Ibanez",
  //         "type": "DEBIT",
  //         "color": "SILVER",
  //         "number": "3010-2477-9216-6991",
  //         "cvv": 407,
  //         "fromDate": "2024-08-19",
  //         "thruDate": "2029-08-19"
  //       },
  //       {
  //         "id": 4,
  //         "cardHolader": "Luis Ibanez",
  //         "type": "CREDIT",
  //         "color": "GOLD",
  //         "number": "3010-2477-9216-6991",
  //         "cvv": 407,
  //         "fromDate": "2024-08-19",
  //         "thruDate": "2029-08-19"
  //       },
  //       {
  //         "id": 5,
  //         "cardHolader": "Luis Ibanez",
  //         "type": "CREDIT",
  //         "color": "SILVER",
  //         "number": "3010-2477-9216-6991",
  //         "cvv": 407,
  //         "fromDate": "2024-08-19",
  //         "thruDate": "2029-08-19"
  //       },
  //       {
  //         "id": 6,
  //         "cardHolader": "Luis Ibanez",
  //         "type": "CREDIT",
  //         "color": "TITANIUM",
  //         "number": "3010-2477-9216-6991",
  //         "cvv": 407,
  //         "fromDate": "2024-08-19",
  //         "thruDate": "2029-08-19"
  //       }
  //     ]
  //   }
  // ]

  // Filtrando las tarjetas de tipo DEBIT
  const debitCards = clientCards.filter(debitCard => debitCard.type === "DEBIT");
  console.log(debitCards);
  // Filtrando las tarjetas de tipo DEBIT
  const creditCards = clientCards.filter(card => card.type === "CREDIT");
  console.log(creditCards);

  // Determinando si mostrar u ocultar el título
  const showOrHideTitleDebit = debitCards.length === 0 ? "text-[0px]" : "text-[45px]";
  const showOrHideTitleCredit = creditCards.length === 0 ? "text-[0px]" : "text-[45px]";



  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <h1 className="text-[45px] text-center">Your <span className="text-[#07d611] font-semibold">CARDS</span></h1>
        <div className="w-full flex flex-row justify-center">
          <div className="border-t-4 border-[#72cb10] w-[70%]">

            <h1 className={showOrHideTitleDebit}>DEBIT</h1>
            <div id='containerDebitCards' className='w-full flex flex-row flex-wrap justify-between'>
              {debitCards.map(debitCard => {
                let color = ""
                let blur = ""
                if (debitCard.color == "GOLD") {
                  color = "CardDebitCreditGold"
                  blur = "granuladoGold"
                }
                if (debitCard.color == "SILVER") {
                  color = "CardDebitCreditSilver"
                  blur = "granuladoSilver"
                }
                else if (debitCard.color == "TITANIUM") {
                  color = "CardDebitCreditTitanium"
                  blur = "granuladoTitanium"
                }
                return (
                  <CardDebitCredit
                  key={debitCard.id}
                  backGroundCard={color}
                  typeSubBackGround={blur}
                  typeCard="Debit Card"
                  numbers={debitCard.number}
                  fromDate={debitCard.fromDate.slice(0, 7)} //con slice indico cuantas letras quiero que se vea de un string, en este caso quiero que se lea las primeras 7
                  thruDate={debitCard.thruDate.slice(0, 7)}
                  fullName={debitCard.cardHolader}
                  cvv={debitCard.cvv}
                />
              )
              })}
            </div>

            <h1 className={showOrHideTitleCredit}>CREDIT</h1>
            <div id='containerCreditCards' className='w-full flex flex-row flex-wrap justify-between'>
              {/* <CardDebitCredit /> */}
              {creditCards.map(card => {
                let colorCredit = ""
                let blurCredit = ""
                if (card.color == "GOLD") {
                  colorCredit = "CardDebitCreditGold"
                  blurCredit = "granuladoGold"
                }
                if (card.color == "SILVER") {
                  colorCredit = "CardDebitCreditSilver"
                  blurCredit = "granuladoSilver"
                }
                else if (card.color == "TITANIUM") {
                  colorCredit = "CardDebitCreditTitanium"
                  blurCredit = "granuladoTitanium"
                }
                return (<CardDebitCredit
                  key={card.id}
                  backGroundCard={colorCredit}
                  typeSubBackGround={blurCredit}
                  typeCard="Credit Card"
                  numbers={card.number}
                  fromDate={card.fromDate.slice(0, 7)}
                  thruDate={card.thruDate.slice(0, 7)}
                  fullName={card.cardHolader}
                  cvv={card.cvv}
                />)
              })}
            </div>
            <div className="my-[60px]">
              <RequestAccountButton title="REQUEST CARD" path="/applyCard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent