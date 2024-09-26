import React, { useEffect, useState } from "react";
import "./FormApplyCard.css";
import ButtonRegisterForm from '../components/ButtonRegisterForm'
import { Link, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import axios from "axios";
import PopUpAlert from "./PopUpAlert";
import checkGif from "../assets/checkGif.gif"
import xGif from "../assets/xGif.gif"

function FormApplyCard() {
  // Obtenemos el token del usuario logueado
  const user = useSelector((store) => store.authenticationReducer);
  const [typeCard, setTypeCard] = useState(''); // Estado para tipo de tarjeta
  const [colorCard, setColorCard] = useState(''); // Estado para el color de la tarjeta

  const [showPopUpAlert, setShowUpAlert] = useState('hidden')
  const [messageShowPopUpAlert, setMessageShowPopUpAlert] = useState('')
  const [gif, setGif] = useState('')
  const [link, setLink] = useState('')

  const [showInputCardType, setShowInputCardType] = useState('hidden')
  const [showInputCardColor, setShowInputCardColor] = useState('hidden')

  const [colorErrorInputCardType, setColorErrorInputCardType] = useState('')
  const [colorErrorInputCardColor, setColorErrorInputCardColor] = useState('')

  const [messageErrorInput, setMessageErrorInput] = useState('')

  // Manejamos el envío del formulario
  const handleApplyCard = async (event) => {
    event.preventDefault(); // Evita la recarga de la página

    const applyCardForm = {
      type: typeCard,
      color: colorCard,
    };

      const token = user.token;
      const response = await axios.post(
        'https://homebanking-luisibanez-deply-back.onrender.com/api/clients/current/cards',
        applyCardForm,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Enviar token en el header
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        setMessageShowPopUpAlert(<><span className="font-extrabold">{response.data}</span></>)
        setGif(checkGif)
        setShowUpAlert('')
        setLink('/cards')

      })
      .catch((error) => {
        setMessageErrorInput('')
        setShowInputCardType('hidden')
        setColorErrorInputCardType('')
        setShowInputCardColor('hidden')
        setColorErrorInputCardColor('')
        console.log(error.response.data)
        let errorMessage = error.response.data
        if (errorMessage.includes("THAN 3")) {
          setMessageShowPopUpAlert(<><span className="font-extrabold">{error.response.data}</span></>)
          setGif(xGif)
          setShowUpAlert('') 
        }
        if (errorMessage.includes('YOU ALREADY HAVE A')) {
          setMessageShowPopUpAlert(<><span className="font-extrabold">{error.response.data}</span></>)
          setGif(xGif)
          setShowUpAlert('') 
        }
        if (errorMessage.includes('Card TYPE')) {
          setMessageErrorInput(errorMessage)
          setShowInputCardType('')
          setColorErrorInputCardType('border-2  border-[red]')
        }
        if (errorMessage.includes('Card COLOR')) {
          setMessageErrorInput(errorMessage)
          setShowInputCardColor('')
          setColorErrorInputCardColor('border-2  border-[red]')
        }

      })
  };

  const handleOnClickPopAupAlert = (e) => {
    setShowUpAlert('hidden')
  }


  return (
    <div>
      <div id="divForm" className="p-6 rounded-lg w-[600px] h-[600px] text-[30px] relative">
        <form onSubmit={handleApplyCard}>
          <div className="flex flex-col justify-center">
            <div className="mt-[40px] mb-[15px]">
              <label htmlFor="cardType" className="block text-white font-bold mb-2">
                Card Type
              </label>
              <select
                id="cardType"
                name="cardType"
                value={typeCard}
                onChange={(e) => {
                  setTypeCard(e.target.value)
                  setColorErrorInputCardType('')
                  setShowInputCardType('hidden')
                }}
                className={`${colorErrorInputCardType} block w-full p-2 border border-gray-300 rounded-lg`}
              >
                <option value="">None</option>
                <option value="CREDIT">CREDIT</option>
                <option value="DEBIT">DEBIT</option>
              </select>
              <p className={`${showInputCardType} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
            </div>

            <div className="mb-[40px]">
              <label htmlFor="cardTier" className="block text-white font-bold mb-2">
                Card Tier
              </label>
              <select
                id="cardTier"
                name="cardTier"
                value={colorCard}
                onChange={(e) => {
                  setColorCard(e.target.value)
                  setColorErrorInputCardColor('')
                  setShowInputCardColor('hidden')
                }}
                className={`${colorErrorInputCardColor} block w-full p-2 border border-gray-300 rounded-lg`}
              >
                <option value="">None</option>
                <option value="GOLD">GOLD</option>
                <option value="SILVER">SILVER</option>
                <option value="TITANIUM">TITANIUM</option>
              </select>
              <p className={`${showInputCardColor} text-[red] text-[17px] bg-white inline-block rounded-[10px] px-[8px] mt-[5px]`}>&#10071;{messageErrorInput}</p>
            </div>

            <div className="flex justify-center mt-[20px]">
              <ButtonRegisterForm title="Apply" />
            </div>
            <div className="flex justify-center mt-[40px]">
              <Link id="loginButton" to="/cards">
                <h1
                  id="h1Apply"
                  className="inline-block text-[22px] font-semibold text-white text-center hover:text-[red] hover:scale-110"
                >
                  CANCEL
                </h1>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className={`${showPopUpAlert}`}>
        <PopUpAlert gif={gif} message={messageShowPopUpAlert} handleOnClick={handleOnClickPopAupAlert} link={link}/>
      </div>
    </div>
    
  );
}

export default FormApplyCard;
