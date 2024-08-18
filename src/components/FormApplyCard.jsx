import React from "react";
import "./FormApplyCard.css";

function FormApplyCard() {
  return (
    <div>
      <div id="divForm" className="p-6 rounded-lg w-[590px] h-[570px] text-[30px]">
        <form>
          <div className="flex flex-col justify-center">
            <div className="my-[40px]">
              <label for="cardType" className="block text-white font-bold mb-2">
                Card Type
              </label>
              <select id="cardType" name="cardType" className="block w-full p-2 border border-gray-300 rounded-lg">
                <option value="None">None</option>
                <option value="CREDIT">CREDIT</option>
                <option value="DEBIT">DEBIT</option>
              </select>
            </div>

            <div className="my-[40px]">
              <label for="cardTier" className="block text-white font-bold mb-2">
                Card Tier
              </label>
              <select id="cardTier" name="cardTier" className="block w-full p-2 border border-gray-300 rounded-lg">
                <option value="None">None</option>
                <option value="GOLD">GOLD</option>
                <option value="SILVER">SILVER</option>
                <option value="TITANIUM">TITANIUM</option>
              </select>
            </div>

            <div className="flex justify-between">
              <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-[#72cb10]">
                APPLY
              </button>
              <button type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-[#d50000]">
                CANCEL
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormApplyCard;
