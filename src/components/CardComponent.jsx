import React from 'react'
import "./CardComponent.css"
import CardDebitCredit from './CardDebitCredit'

{/*       
          props.backGroundCard (fondo de la tarjeta  {CardDebitCreditGold, CardDebitCreditSilver, CardDebitCreditTitanium})  
          props.typeSubBackGround  (tipo de desenfoque del fondo  {granuladoGold,  granuladoSilver,  granuladoTitanium})
          props.typeCard (nombre de tipo de carta  {Credit Card,  Debit Card})
          props.numbers16  (16 digitos de la tarjeta)
          props.fromDate  (fecha en la que se creo la carta)
          props.thruDate  (fecha de expiracion de la tarjeta)
          props.name  (nombre del titular)
          props.lastName   (apellido del titular)
          props.numbers3  (numero de seguridad de 3 digitos)    
      */}

function CardComponent() {

  let clients = [
    {
      "id": 1,
      "firstName": "Melba",
      "lastName": "Morel",
      "email": "melba@mindhub.com",
      "accounts": [
        {
          "id": 1,
          "number": "VIN001",
          "creationDate": "2024-08-19T23:52:27.260649",
          "balance": 5000.0,
          "transactios": [
            {
              "id": 1,
              "amount": 2000.0,
              "description": "Rent",
              "dateTime": "2024-08-19T23:52:27.260649",
              "type": "CREDIT"
            },
            {
              "id": 2,
              "amount": 500.0,
              "description": "Groceries",
              "dateTime": "2024-08-18T23:52:27.260649",
              "type": "DEBIT"
            },
            {
              "id": 3,
              "amount": 1500.0,
              "description": "Salary",
              "dateTime": "2024-08-17T23:52:27.260649",
              "type": "CREDIT"
            }
          ]
        },
        {
          "id": 2,
          "number": "VIN002",
          "creationDate": "2024-08-20T23:52:27.260649",
          "balance": 7500.0,
          "transactios": [
            {
              "id": 6,
              "amount": 700.0,
              "description": "Internet Bill",
              "dateTime": "2024-08-15T23:52:27.260649",
              "type": "DEBIT"
            },
            {
              "id": 5,
              "amount": 2500.0,
              "description": "Freelance Work",
              "dateTime": "2024-08-16T23:52:27.260649",
              "type": "CREDIT"
            },
            {
              "id": 4,
              "amount": 800.0,
              "description": "Electricity Bill",
              "dateTime": "2024-08-19T23:52:27.260649",
              "type": "DEBIT"
            }
          ]
        }
      ],
      "loans": [
        {
          "id": 1,
          "loanId": 1,
          "payments": 60,
          "name": "Mortgage",
          "amount": 400000.0
        },
        {
          "id": 2,
          "loanId": 2,
          "payments": 12,
          "name": "Personal",
          "amount": 50000.0
        }
      ],
      "cards": [
        {
          "id": 1,
          "cardHolader": "Melba Morel",
          "type": "DEBIT",
          "color": "GOLD",
          "number": "5741-3936-3890-7471",
          "cvv": 723,
          "fromDate": "2024-08-19",
          "thruDate": "2029-08-19"
        },
        {
          "id": 2,
          "cardHolader": "Melba Morel",
          "type": "CREDIT",
          "color": "TITANIUM",
          "number": "2923-8134-8693-7624",
          "cvv": 915,
          "fromDate": "2024-08-19",
          "thruDate": "2029-08-19"
        },
        {
          "id": 3,
          "cardHolader": "Luis Ibanez",
          "type": "DEBIT",
          "color": "SILVER",
          "number": "3010-2477-9216-6991",
          "cvv": 407,
          "fromDate": "2024-08-19",
          "thruDate": "2029-08-19"
      }
      ]
    },
    {
      "id": 2,
      "firstName": "Luis",
      "lastName": "Ibanez",
      "email": "luis@gmail.com",
      "accounts": [
        {
          "id": 3,
          "number": "VIN003",
          "creationDate": "2024-08-19T23:52:27.260649",
          "balance": 2000.0,
          "transactios": [
            {
              "id": 7,
              "amount": 1000.0,
              "description": "Gift",
              "dateTime": "2024-08-19T23:52:27.260649",
              "type": "CREDIT"
            },
            {
              "id": 9,
              "amount": 4000.0,
              "description": "Bonus",
              "dateTime": "2024-08-17T23:52:27.260649",
              "type": "CREDIT"
            },
            {
              "id": 8,
              "amount": 1200.0,
              "description": "Car Maintenance",
              "dateTime": "2024-08-18T23:52:27.260649",
              "type": "DEBIT"
            }
          ]
        },
        {
          "id": 4,
          "number": "VIN004",
          "creationDate": "2024-07-19T23:52:27.260649",
          "balance": 12000.0,
          "transactios": [
            {
              "id": 12,
              "amount": 600.0,
              "description": "Subscription",
              "dateTime": "2024-08-15T23:52:27.260649",
              "type": "DEBIT"
            },
            {
              "id": 11,
              "amount": 5000.0,
              "description": "Investment Return",
              "dateTime": "2024-08-16T23:52:27.260649",
              "type": "CREDIT"
            },
            {
              "id": 10,
              "amount": 800.0,
              "description": "Restaurant",
              "dateTime": "2024-08-19T23:52:27.260649",
              "type": "DEBIT"
            }
          ]
        }
      ],
      "loans": [
        {
          "id": 3,
          "loanId": 2,
          "payments": 24,
          "name": "Personal",
          "amount": 100000.0
        },
        {
          "id": 4,
          "loanId": 3,
          "payments": 36,
          "name": "Automotive",
          "amount": 200000.0
        }
      ],
      "cards": [
        {
          "id": 3,
          "cardHolader": "Luis Ibanez",
          "type": "CREDIT",
          "color": "SILVER",
          "number": "3010-2477-9216-6991",
          "cvv": 407,
          "fromDate": "2024-08-19",
          "thruDate": "2029-08-19"
        }
      ]
    }
  ]

    // Filtrando las tarjetas de tipo DEBIT
    const debitCards = clients[0].cards.filter(card => card.type === "DEBIT");
    console.log(debitCards);

    // Determinando si mostrar u ocultar el título
    const showOrHideTitleDebit = debitCards.length === 0 ? "text-[0px]" : "text-[45px]";

  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
      <h1 className="text-[45px] text-center">Your <span className="text-[#07d611] font-semibold">CARDS</span></h1>
        <div className="w-full flex flex-row justify-center">
          <div className="border-t-4 border-[#72cb10] w-[70%]">

            <h1 className={showOrHideTitleDebit}>DEBIT</h1>
            <div id='containerDebitCards' className='w-full flex flex-row flex-wrap justify-between'>
            {/* <CardDebitCredit /> */}
            {debitCards.map(card => {
              console.log(clients[0].firstName)
              console.log(card.cardHolader)
              return ( <CardDebitCredit 
                backGroundCard = "CardDebitCreditGold"
                typeSubBackGround = "granuladoGold"
                typeCard = "Debit Card"
                numbers16 = {card.number}
                fromDate = {card.fromDate}
                thruDate = {card.thruDate}
                name = {clients[0].firstName}
                lastName = {clients[0].lastName}
                numbers3 = {card.cvv}
                        /> )
            })}
            </div>

            {/* <h1 className={showOrHideTitle}>CREDIT</h1> */}
            <div id='containerCreditCards' className='w-full flex flex-row flex-wrap justify-between'>
            {/* <CardDebitCredit /> */}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CardComponent