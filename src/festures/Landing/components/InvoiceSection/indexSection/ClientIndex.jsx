import React from 'react'

const ClientIndex = ({cName, setCname, cAddress, setCAddress, cEmail, setCEmail}) => {
  return (
    <div className="grid grid-cols-2 gap-6 pb-4 pr-2">
        <div className="flex flex-col">
            <label htmlFor="cName">Enter clint name:</label>
            <input
                type="text"
                id="cName"
                name="cName"
                placeholder="Enter clint name"
                value={cName}
                onChange={(e) => setCname(e.target.value)}
                className="w-full h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="cAddress">Enter clint address:</label>
            <input
                type="text"
                id="cAddress"
                name="cAddress"
                placeholder="Enter clint address"
                value={cAddress}
                onChange={(e) => setCAddress(e.target.value)}
                className="w-full h-10 border border-slate-300 rounded-lg pt-3 pl-3 outline-none"
            />
        </div>
        <div className="flex flex-col">
            <label htmlFor="cEmail">Enter the email address:</label>
            <input
                type="email"
                id="cEmail"
                name="cEmail"
                placeholder="Enter clint address"
                value={cEmail}
                onChange={(e) => setCEmail(e.target.value)}
                className="w-full h-10 border border-slate-300 rounded-lg pt-3 pl-3 outline-none"
            />
        </div>
    </div>
  )
}

export default ClientIndex