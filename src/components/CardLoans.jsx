
import "./CardLoans.css"

function CardLoans({name, amount, payments, descriptionAmount, descriptionText, descriptionInterest, descriptionTotalPay}) {

    return (
        <div className='my-[20px]'>
            <div id='fatherContainer' className='w-[460px] h-[380px] flex flex-row justify-center items-center rounded-[30px] bg-[#3fe43f85]'>
                <div id='childContainer' className='w-[430px] h-[350px] rounded-[30px] bg-white'>
                    <h1 className='text-center mt-[6px] text-[35px] font-bold text-[#07d611]'>{name}</h1>
                    <p className='text-[22px] font-semibold ml-[10px] mt-[10px]'>AMOUNT: ${amount}</p>
                    <p className='text-[22px] font-semibold ml-[10px] mt-[10px]'>PAYMENTS: {payments}</p>
                    <p className='text-[22px] font-semibold ml-[10px] mt-[10px]'>DESCRIPTION: </p>
                    <p className='text-[18px] font-semibold ml-[18px]'>{descriptionAmount}</p>
                    <p className='text-[18px] font-semibold ml-[18px] my-[5px]'>{descriptionText}</p>
                    <p className='text-[18px] font-semibold ml-[18px]'>{descriptionInterest}</p>
                    <p className='text-[18px] font-semibold ml-[18px] my-[5px]'>{descriptionTotalPay}</p>
                </div>
            </div>
        </div>
    )
}

export default CardLoans