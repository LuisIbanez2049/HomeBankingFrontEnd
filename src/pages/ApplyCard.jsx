import React from "react";
import CardAnimation from "../components/CardAnimation";
import FormApplyCard from "../components/FormApplyCard";

function ApplyCard() {
  return (
    <div>
      <div id="body" className="flex flex-col min-h-screen">
          <div id="containerAll" className="w-full flex flex-row justify-center mt-12">
            <div className="w-[80%]">
              <h1 className="text-[45px]">Apply for a <span className="text-[#07d611] font-semibold">CARD</span></h1>
              <div id="containerFormAndImg" className="w-full border-b-4 border-[#07d611] flex flex-row">

                <div id="conatainerForm" className="w-[50%] h-[700px]  flex flex-row justify-center items-center">
                  <FormApplyCard/>
                </div>

                <div id="containerImg" className="w-[50%] h-[620px]  flex flex-row justify-center">
                    <CardAnimation/>
                </div>

              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ApplyCard;
