import React, { useEffect, useState } from 'react'
import "./CardComponent.css"
import CardDebitCredit from './CardDebitCredit'
import RequestAccountButton from "./RequestAccountButton";
import { useSelector } from 'react-redux';
import axios from 'axios';
import ConfirmationPopUpAlert from "./ConfirmationPopUpAlert";
import PopUpAlert from "./PopUpAlert";
import xGif from "../assets/xGif.gif"
import "./CardComponent.css"

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
  const [messageNoCards, setMessageNoCards] = useState('')
  const [showDivNoCards, setShowDivNoCards] = useState('hidden')


  const [showPopUpAlert, setShowPopUpAlert] = useState('hidden')
  const [messageShowPopUpAlert, setMessageShowPopUpAlert] = useState('')
  const [gif, setGif] = useState('')

  const [showConfirmationPopUpAlert, setShowConfirmationPopUpAlert] = useState("hidden");
  const [link, setLink] = useState('/applyCard')

  const handleRequestCardButton = () => {
    // Desplazar hasta el principio de la página
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
    
    console.log(debitCards.length)
    console.log(creditCards.length)
    if (debitCards.length < 3 || creditCards.length < 3) {
      setShowConfirmationPopUpAlert('')
    } else {
      setShowPopUpAlert('')
      setMessageShowPopUpAlert(<><span className=' font-extrabold text-[25px]'>YOU CAN NOT HAVE MORE CARDS</span> <br /> <span className='text-[15px]'>YOU CAN ONLY HAVE 3 CREDIT CARDS AND 3 DEBIT CARDS</span></>)
      setGif(xGif)
      setLink('')
    }
  }
  const handelOnClickConfirmation = () => {
    setShowConfirmationPopUpAlert('hidden')
    if (debitCards.length == 3 && creditCards.length == 3) {
      setShowPopUpAlert('')
    }
  }
  const handelOnClickCancel = () => {
    setShowConfirmationPopUpAlert('hidden');
  }
  const handleOnClickPopAupAlert = () => {
    setShowPopUpAlert('hidden')
  }

  useEffect(() => {
    const token = user.token;
    console.log(token)
    axios.get('https://homebanking-luisibanez-deply-back.onrender.com/api/clients/current/cards', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setClientCards(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data)
        let errorMessage = error.response.data
        if (errorMessage.includes("YOU DONT'T HAVE CARDS")) {
          setMessageNoCards(errorMessage)
          setShowDivNoCards('')
        }
      })
  }, [])

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
            <div id='divNoCards' className={`${showDivNoCards} mt-[40px] p-[17px] rounded-[30px]`}>
              <h1 id='h1NoCards' className='text-center text-[45px] font-extrabold rounded-[25px]'>{messageNoCards}</h1>
            </div>
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
              <RequestAccountButton handelOnClick={handleRequestCardButton} title="REQUEST CARD" path={""} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${showConfirmationPopUpAlert}`}>
        <ConfirmationPopUpAlert message={"ARE YOU SURE YOU WANT TO APPLY FOR A NEW CARD?"} link={link} handleOnClickAccept={handelOnClickConfirmation} handleOnClickCancel={handelOnClickCancel} />
      </div>
      <div className={`${showPopUpAlert}`}>
        <PopUpAlert gif={gif} message={messageShowPopUpAlert} handleOnClick={handleOnClickPopAupAlert} />
      </div>
    </div>
  )
}

export default CardComponent