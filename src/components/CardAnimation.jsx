import React from "react";
import "./CardAnimation.css"
import CardAnimation2 from "../assets/CardAnimation2.png";
import CardAnimation1 from "../assets/CardAnimation1.png";

function CardAnimation() {
  return (
    <div>
        <div id="levitating-image" className="relative z-20 w-[590px]">
          <img src={CardAnimation2} alt="" />
        </div>
        <img id="cardBlack" className="z-10 w-[610px]" src={CardAnimation1} alt="" />
    </div>
  );
}

export default CardAnimation;
