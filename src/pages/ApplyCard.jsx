import React from "react";
import imgApplyCard from "../assets/imgApplyCard.png";

function ApplyCard() {
  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
        <div id="main" className="relative flex-1">
          <div id="containerAll" className="w-full flex flex-row justify-center mt-12">
            <div className="w-[85%] border border-black">
              <h1 className="mb-8 text-[45px]">Aplly for a <span className="text-[#07d611] font-semibold">CARD</span></h1>
              <div id="containerFormAndImg" className="w-full border border-black flex flex-row">
                <div id="conatainerForm" className="w-[60%] border border-black">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[550px]">
                    <form>
                      <div classNameName="">
                        <label for="cardType" className="block text-gray-700 font-bold mb-2">
                          Card Type
                        </label>
                        <select id="cardType" name="cardType" className="block w-full p-2 border border-gray-300 rounded-lg">
                          <option value="None">None</option>
                          <option value="CREDIT">CREDIT</option>
                          <option value="DEBIT">DEBIT</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label for="cardTier" className="block text-gray-700 font-bold mb-2">
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
                        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                          APPLY
                        </button>
                        <button type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-600">
                          CANCEL
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div id="containerImg" className="w-[40%] border border-black">
                    <img src={imgApplyCard} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyCard;
