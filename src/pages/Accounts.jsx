
import AccountComponent from "../components/AccountComponent";
import React from 'react'
import PopUpAlert from "../components/PopUpAlert";
import checkGif from "../assets/checkGif.gif"
import xGif from "../assets/xGif.gif"
import ConfirmationPopUpAlert from "../components/ConfirmationPopUpAlert";

function Accounts() {
  return (
    <div>
        <AccountComponent/>
        {/* <PopUpAlert gif={checkGif} message={"ACCOUNT CREATED"}/> */}
        {/* <ConfirmationPopUpAlert gif={checkGif} message={"ARE YOU SURE TO OPEN A NEW ACCOUNT?"}/> */}
    </div>
  )
}

export default Accounts