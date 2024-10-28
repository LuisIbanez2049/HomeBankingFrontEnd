import React from 'react'
import { CreditCard, DollarSign, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react"

function PdfGeneratorRow({description, redArrow, greenArrow, date, hour, color, signo, amount}) {


    function formatoFecha(fechaStr) {
        
        const meses = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
          ];
      
        // Separar el string en año, mes y día
        const [year, month, day] = fechaStr.split("-");
      
        // Convertir el mes a su nombre en español
        const mesNombre = meses[parseInt(month) - 1];
      
        // Formatear el resultado final
        return `${parseInt(day)} ${mesNombre}, ${year}`;
      }



    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                    
                    <ArrowDownRight className={`${greenArrow} text-green-600 w-5 h-5`} />
                    <ArrowUpRight className={`${redArrow} text-red-600 w-5 h-5`} />
                </div>
                <div>
                    <p className="font-medium text-gray-800">{description}</p>
                    <p className="text-sm text-gray-500">{formatoFecha(`${date}`)} - {hour}</p>
                </div>
            </div>
            <p className={`${color} font-semibold`}>{signo}{amount}</p>
        </div>
    )
}

export default PdfGeneratorRow