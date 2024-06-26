import React from 'react'

const InvoiceData = ({invoiceNo, invoiceDate, dueDate}) => {
  return (
    <>
        <div className="flex justify-end pr-10 pb-14">
            <div className="flex flex-col w-[250px] text-gray-600">
                <p className="mb-2 border-b-2 h-[32px]">Invoice</p>
                <div className="">
                    <div className="flex justify-between">
                        <div className="">Invoice No.</div>
                        <div className="">{invoiceNo}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Invoice Date:</div>
                        <div className="">{invoiceDate}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">Due Date</div>
                        <div className="">{dueDate}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InvoiceData