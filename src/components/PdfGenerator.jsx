import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CreditCard, DollarSign, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react"
import html2pdf from "html2pdf.js";
import PdfGeneratorRow from "./PdfGeneratorRow";
import MoneyDisplay from "./MoneyDisplay";

const PdfGenerator = ({ account }) => {
    const generatePDF = () => {

        const element = document.getElementById("pdfContent");

        // Configuración para alta calidad
        const options = {
            margin: 0,
            filename: "documento.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 4 }, // Aumenta el tamaño de escala para mejorar la calidad
            jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
        };

        // Generar el PDF
        html2pdf().set(options).from(element).save();
    };

  
    function suma(array) {
        let total = 0;
        array.map(transaction => total += transaction.amount)
        return total
    }
 
        let ingresos = account?.transactions?.filter(transaction => transaction.type === 'CREDIT') || [];
        console.log(ingresos)
        
        let gastos = account?.transactions?.filter(transaction => transaction.type === 'DEBIT') || [];
        console.log(gastos)
     
  


    return (
        <div>
            <div >
                <div id="pdfContent" className=" bg-green-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-xl w-[75%] ">
                        <div className="bg-green-600 p-6 text-white">
                            <h2 className="text-2xl font-bold">Resumen de Cuenta</h2>
                            <p className="text-green-100">Bienvenido de vuelta, Ana</p>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-gray-500">Saldo Disponible</p>
                                    <p className="text-3xl font-bold text-gray-800">{account && <MoneyDisplay amount={account.balance} />}</p>
                                </div>
                                <CreditCard className="text-green-600 w-10 h-10" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-green-100 rounded-lg p-4">
                                    <DollarSign className="text-green-600 w-8 h-8 mb-2" />
                                    <p className="text-sm text-green-800">Ingresos</p>
                                    <p className="text-lg font-semibold text-green-900">{ingresos && <MoneyDisplay amount={suma(ingresos)}/>}</p>
                                </div>
                                <div className="bg-red-100 rounded-lg p-4">
                                    <PieChart className="text-red-600 w-8 h-8 mb-2" />
                                    <p className="text-sm text-red-800">Gastos</p>
                                    <p className="text-lg font-semibold text-red-900">{gastos && <MoneyDisplay amount={suma(gastos)}/>}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800">Últimas Transacciones</h3>
                                <div className="space-y-3">
                                    {/* <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-3">
                                            <div className="bg-green-100 p-2 rounded-full">
                                                <ArrowDownRight className="text-green-600 w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-800">Depósito</p>
                                                <p className="text-sm text-gray-500">10 Mayo, 2023</p>
                                            </div>
                                        </div>
                                        <p className="text-green-600 font-semibold">+$1,500.00</p>
                                    </div> */}


                                    {/* <PdfGeneratorRow description={account && account.transactions && account.transactions[0].description}/> */}
                                    {account && account.transactions && account.transactions.map(transaction => {
                                        let redArrow = "hidden"
                                        let greenArrow = "hidden"
                                        let color = ''
                                        let signo = ''
                                        if (transaction.type == "CREDIT") {
                                            greenArrow = 'show'
                                            redArrow = 'hidden'
                                            color = 'text-green-600'
                                            signo = '+'
                                        } else if (transaction.type == "DEBIT") {
                                            redArrow = 'show'
                                            greenArrow = 'hidden'
                                            color = 'text-red-600'
                                            signo = '-'
                                        }
                                        return <PdfGeneratorRow greenArrow={greenArrow} redArrow={redArrow} description={transaction.description} date={transaction.dateTime.slice(0, 10)}
                                            hour={transaction.dateTime.slice(11, 16)} color={color} signo={signo} amount={<MoneyDisplay amount={transaction.amount} />} />
                                    })}

                                </div>
                            </div>
                            <div className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold text-center">
                                BANK OF AMERICA
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-center">
                    <button className="w-[50%] bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300" onClick={generatePDF}>Descargar PDF</button>
                </div>
            </div>

        </div>
    );
};

export default PdfGenerator;
