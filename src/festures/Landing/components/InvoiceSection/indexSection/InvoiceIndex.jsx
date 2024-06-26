import React from 'react'

const InvoiceIndex = ({invoiceNo, setInvoiceNo, invoiceDate, setInvoiceDate, dueDate, setDueDate}) => {
  return (
    <div className="grid grid-cols-3 py-2">
        <div className="flex flex-col">
            <label htmlFor="invoiceNo">Enter the invoice no.</label>
            <input
                type="text"
                id="invoiceNo"
                name="invoiceNo"
                placeholder="Ex. 1003"
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                className="w-[320px] h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="invoiceDate">Enter the invoice date:</label>
            <input
                type="date"
                id="invoiceDate"
                name="invoiceDate"
                placeholder="Ex. 22-05-2024"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                className="w-[320px] h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="dueDate">Enter the due date:</label>
            <input
                type="date"
                id="dueDate"
                name="dueDate"
                placeholder="Ex. 22-05-2025"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-[320px] h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
            />
        </div>
    </div>
  )
}

export default InvoiceIndex