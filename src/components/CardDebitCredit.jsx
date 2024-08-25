import React from 'react'
import "./CardDebitCredit.css"
import ChipCard from "../assets/chipCard.png"
import HologramaCards from "../assets/hologramaCards.png"
import Text3D from './Text3D'

function CardDebitCredit(props) {
  return (
    <div className='card-container my-[20px]'>
      {/* props.backGroundCard (fondo de la tarjeta  {CardDebitCreditGold, CardDebitCreditSilver, CardDebitCreditTitanium})  
          props.typeSubBackGround  (tipo de desenfoque del fondo  {granuladoGold,  granuladoSilver,  granuladoTitanium})
          props.typeCard (nombre de tipo de carta  {Credit Card,  Debit Card})
          props.numbers  (16 digitos de la tarjeta)
          props.fromDate  (fecha en la que se creo la carta)
          props.thruDate  (fecha de expiracion de la tarjeta)
          props.fullName  (nombre completo del titular)
          props.cvv  (numero de seguridad de 3 digitos)    
      */}
      <div className='card'>
        <div className='card-front'>
          <div id={props.backGroundCard} className='w-[480px] h-[290px] flex flex-row justify-center items-center rounded-[30px]'>  {/* pasar por parametro la id ------------------*/}
            <div id='subcontainerAll' className='w-[92%] h-[88%] relative z-20 p-[4px]'>
              <div className='w-full flex flex-row justify-between mb-[25px]'>

                <div>
                  <img id='chip' className='w-[75px] rounded-[8px] mt-[5px]' src={ChipCard} alt="" />
                </div>
                <div >

                  {/* pasar por parametro el titulo tipo de tarjeta-------------------*/}
                  {/* <h1><Text3D textSize="text-[32px]" title={props.typeCard}/></h1>  */}
                  <h1 id='white' className='text-[35px]'> {props.typeCard} </h1>
                  <div className='w-full flex flex-row justify-end'>
                    <div id='holograma' className='w-[90px] h-[45px] rounded-[50px]'> </div>
                  </div>

                </div>

              </div>

              {/* pasar por parametro el titulo numero de 16 digitos de la tarjeta---------------*/}
              {/* <h1><Text3D textSize="text-[34px]" title={props.numbers}/></h1>  */}
              <h1 id='whiteNumbers' className='text-[36px]'> {props.numbers} </h1>
              <div id='containerDateFromAndTo' className=' flex flex-row'>

                <div id='containerFROM' className='flex flex-row mr-[35px]'>
                  <div id='containerh1FROM' className='h-full flex flex-col justify-center mr-[10px]'>
                    <h1 id='whiteFromThru' className='text-[13px]'> FROM </h1>
                  </div>

                  {/* pasar por parametro el titulo date From */}
                  {/* <h1> <Text3D textSize="text-[18px]" title={props.fromDate}/> </h1>  */}
                  <h1 id='white' className='text-[23px]'> {props.fromDate} </h1>
                </div>

                <div id='containerTHRU' className='flex flex-row'>
                  <div id='containerh1TRHR' className='h-full flex flex-col justify-center mr-[10px]'>
                    <h1 id='whiteFromThru' className='text-[13px]'> THRU </h1>
                    {/* <h1> <Text3D textSize="text-[12px]" title="THRU"/> </h1> */}
                  </div>

                  {/* pasar por parametro el titulo date Thru*/}
                  {/* <h1> <Text3D textSize="text-[18px]" title={props.thruDate}/> </h1>  */}
                  <h1 id='white' className='text-[23px]'> {props.thruDate} </h1>
                </div>

              </div>


              <div className='w-full flex flex-row justify-between'>
                <div>
                  {/* pasar por parametro el titulo NAME------------------*/}
                  {/* <h1 className=' inline-block'> <Text3D textSize="text-[26px]" title={props.fullName}/> </h1>  serif*/}
                  <h1 id='white' className='text-[27px]'> {props.fullName} </h1>
                </div>
              </div>
            </div>

            <div id={props.typeSubBackGround} className='w-[454px] h-[258px]  absolute z-10 rounded-[10px]'>  </div> {/* pasar por parametro la id TIPO DE BACKGROUND------------------*/}

          </div>
        </div>

        <div className='card-back'>
          <div id={props.backGroundCard} className='w-[480px] h-[290px] flex flex-col items-center rounded-[30px] pt-[35px]'>
            <div id='blackBackGround' className='w-full h-[80px] mb-[30px]'></div>
            <div id='whiteBackGround' className='w-[350px] h-[60px]  flex justify-center items-center'>
              <Text3D textSize="text-[45px]" title={`cvv ${props.cvv}`} />  {/* pasar por parametro el titulo NUMERO DE 3 DIGITOS------------------*/}
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}

export default CardDebitCredit