import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ReactToPrint from 'react-to-print'
import generatePDF from 'react-to-pdf'


import './../../../../assets/invoice.css'
import MainData from './invoiceComp/MainData'
import ClientData from './invoiceComp/ClientData'
import InvoiceData from './invoiceComp/InvoiceData'
import ProductData from './invoiceComp/ProductData'

import MainIndex from './indexSection/MainIndex'
import ClientIndex from './indexSection/ClientIndex'
import InvoiceIndex from './indexSection/InvoiceIndex'
import ProductIndex from './indexSection/ProductIndex'

const Invoice = () => {
    const [showInvoice, setShowInvoice] = useState(false)


    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [cName, setCname] = useState("")
    const [cAddress, setCAddress] = useState("")
    const [cEmail, setCEmail] = useState("")
    const [invoiceNo, setInvoiceNo] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [unit, setUnit] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")
    
    const componentRef = useRef()
    const targetRef = useRef()

  return (
    <>
        <div className="  bg-slate-300  w-screen h-full">
            { showInvoice ? 
            <>
                <div  className="flex flex-col">
                    <div ref={targetRef} className="pl-[205px] flex justify-center">
                        <div ref={componentRef} className="w-[800px] pl-10 min-h-[800px] p-2 rounded-md mt-2
                        bg-slate-100 border-2 border-slate-600">
                            <div className="flex justify-between pt-5">
                                <p className=" text-3xl  font-semibold">INVOICE</p>
                                <div className="flex gap-5 mr-14 text-white font-semibold">
                                    <ReactToPrint trigger={() =>
                                    <button className="flex justify-center items-center bg-gray-500 w-[70px] h-[30px] rounded-md">Print</button>}
                                    content={() => componentRef.current}/>
                                    <button onClick={() => generatePDF(targetRef, {filename: 'invoice.pdf'})} className="px-2 flex justify-center items-center bg-blue-400 w-[90px] h-[30px] rounded-md">Download</button>
                                </div>
                            </div>

                            <MainData name={name} address={address} email={email} />

                            <ClientData cName={cName} cAddress={cAddress} cEmail={cEmail} />

                            <InvoiceData invoiceNo={invoiceNo} invoiceDate={invoiceDate} dueDate={dueDate} />

                            <ProductData description={description} quantity={quantity} unit={unit} price={price} amount={amount} setAmount={setAmount}/>
                        </div>
                    </div>
                    <Link to="" onClick={() => setShowInvoice(false)} className=" bg-blue-400
                            w-[200px] ml-[450px] mt-4 
                            text-white font-bold py-2 px-8 rounded shadow
                            border-2 border-blue-400 hover:bg-transparent hover:text-blue-400
                            transition-all duration-300 ">Edit Info</Link>
                </div>

            </> : (
                <>
                    <div className=" pl-[400px] pr-[100px] flex flex-col mt-10 bg-slate-50">
                        <p className="pb-2 text-4xl font-semibold border-b-2 border-slate-400">Invoice Details</p>
                        <div className=" index-sec flex flex-col
                        md:grid-cols-1  gap-[10px]  py-6">

                            {/* start of me */}
                            <MainIndex name={name} setName={setName} address={address} setAddress={setAddress} email={email} setEmail={setEmail}/>

                            {/* start of clint */}
                            <ClientIndex cName={cName} setCname={setCname} cAddress={cAddress} setCAddress={setCAddress} cEmail={cEmail} setCEmail={setCEmail}/>

                            {/* start of invoice data */}
                            <InvoiceIndex invoiceNo={invoiceNo} setInvoiceNo={setInvoiceNo} invoiceDate={invoiceDate} setInvoiceDate={setInvoiceDate} dueDate={dueDate} setDueDate={setDueDate}/>

                            {/* start of Product detail */}
                            <ProductIndex description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} unit={unit} setUnit={setUnit} price={price} setPrice={setPrice}/>

                        </div>

                        <Link to="" onClick={() => setShowInvoice(true)} className=" flex justify-center bg-blue-400
                        w-[150px] text-white font-bold mt-2 mb-10 py-3 px-8 rounded shadow
                        border-2 border-blue-400 hover:bg-transparent hover:text-blue-400
                        transition-all duration-300 ">Save</Link>
                    </div>
                </>
            )}
        </div>
    </>
  )
}

export default Invoice