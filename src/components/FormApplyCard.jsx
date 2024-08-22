import React from "react";
import "./FormApplyCard.css";
import ButtonRegisterForm from '../components/ButtonRegisterForm'
import { Link } from 'react-router-dom'

function FormApplyCard() {
  return (
    <div>
      <div id="divForm" className="p-6 rounded-lg w-[600px] h-[600px] text-[30px] relative">
        <form>
          <div className="flex flex-col justify-center">
            <div className="my-[40px]">
              <label htmlFor="cardType" className="block text-white font-bold mb-2">
                Card Type
              </label>
              <select id="cardType" name="cardType" className="block w-full p-2 border border-gray-300 rounded-lg">
                <option value="None">None</option>
                <option value="CREDIT">CREDIT</option>
                <option value="DEBIT">DEBIT</option>
              </select>
            </div>

            <div className="my-[40px]">
              <label htmlFor="cardTier" className="block text-white font-bold mb-2">
                Card Tier
              </label>
              <select id="cardTier" name="cardTier" className="block w-full p-2 border border-gray-300 rounded-lg">
                <option value="None">None</option>
                <option value="GOLD">GOLD</option>
                <option value="SILVER">SILVER</option>
                <option value="TITANIUM">TITANIUM</option>
              </select>
            </div>

            <div className="flex justify-center mt-[20px]">
              <ButtonRegisterForm title="Apply"/>
            </div>
            <div className="flex justify-center mt-[40px]">
              <Link id="loginButton" to="/cards"> <h1 id="h1Apply" className=" inline-block text-[22px] font-semibold text-white text-center  hover:text-[red] hover:scale-110">CANCEL</h1> </Link>
            </div>
          </div>
        </form>
      </div>      
    </div>
  );
}

export default FormApplyCard;
