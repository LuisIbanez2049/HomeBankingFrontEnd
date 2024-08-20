import React from 'react'
import "./CardDebitCredit.css"
import ChipCard from "../assets/chipCard.png"
import HologramaCards from "../assets/hologramaCards.png"
import Text3D from './Text3D'

function CardDebitCredit(props) {
  return (
    <div>
      {/* props.backGroundCard (fondo de la tarjeta  {CardDebitCreditGold, CardDebitCreditSilver, CardDebitCreditTitanium})  
          props.typeSubBackGround  (tipo de desenfoque del fondo  {granuladoGold,  granuladoSilver,  granuladoTitanium})
          props.typeCard (nombre de tipo de carta  {Credit Card,  Debit Card})
          props.numbers16  (16 digitos de la tarjeta)
          props.fromDate  (fecha en la que se creo la carta)
          props.thruDate  (fecha de expiracion de la tarjeta)
          props.name  (nombre del titular)
          props.lastName   (apellido del titular)
          props.numbers3  (numero de seguridad de 3 digitos)    
      */}
      <div id={props.backGroundCard} className='w-[450px] h-[270px] flex flex-row justify-center items-center rounded-[30px]'>  {/* pasar por parametro la id ------------------*/}
        <div id='subcontainerAll' className='w-[92%] h-[88%] relative z-20 p-[4px]'>
          <div className='w-full flex flex-row justify-between mb-[25px]'>

            <div>
              <img id='chip' className='w-[75px] rounded-[8px] mt-[5px]' src={ChipCard} alt="" />
            </div>
            <div >
              
              <h1><Text3D textSize="text-[32px]" title={props.typeCard}/></h1> {/* pasar por parametro el titulo tipo de tarjeta-------------------*/}
              <div className='w-full flex flex-row justify-end'>
                <div id='holograma' className='w-[90px] h-[45px] rounded-[50px]'> </div>
              </div>

            </div>

          </div>

          <h1><Text3D textSize="text-[28px]" title={props.numbers16}/></h1> {/* pasar por parametro el titulo numero de 16 digitos de la tarjeta---------------*/}
          <div id='containerDateFromAndTo' className=' flex flex-row'>

            <div id='containerFORM' className='flex flex-row mr-[25px]'>
              <div id='containerh1FORM' className='h-full flex flex-col justify-center mr-[5px]'>
                <h1> <Text3D textSize="text-[12px]" title="FROM"/> </h1> 
              </div>
              <h1> <Text3D textSize="text-[18px]" title={props.fromDate}/> </h1> {/* pasar por parametro el titulo date From */}
            </div>

            <div id='containerTHRU' className='flex flex-row'>
              <div id='containerh1TRHR' className='h-full flex flex-col justify-center mr-[5px]'>
                <h1> <Text3D textSize="text-[12px]" title="THRU"/> </h1>
              </div>
              <h1> <Text3D textSize="text-[18px]" title={props.thruDate}/> </h1> {/* pasar por parametro el titulo date Thru*/}
            </div>

          </div>
          

          <div className='w-full flex flex-row justify-between'>
            <div>
              <h1 className=' inline-block'> <Text3D textSize="text-[26px]" title={props.name}/> </h1> {/* pasar por parametro el titulo NAME------------------*/}
              <h1 className=' inline-block ml-[20px]'> <Text3D textSize="text-[26px]" title={props.lastName}/> </h1> {/* pasar por parametro el titulo  LAST NAME------------------*/}
            </div>

            <h1><Text3D textSize="text-[22px]" title={props.numbers3}/></h1> {/* pasar por parametro el titulo NUMERO DE 3 DIGITOS------------------*/}
          </div>
        </div>

        <div id={props.typeSubBackGround} className='w-[414px] h-[238px]  absolute z-10 rounded-[10px]'>  </div> {/* pasar por parametro la id TIPO DE BACKGROUND------------------*/}

      </div>
    </div>
  )
}

export default CardDebitCredit