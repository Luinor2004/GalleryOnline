import React from 'react'

const ClientData = ({cName, cAddress, cEmail}) => {
  return (
    <>
        <div className="pb-4 ">
            <div className="text-lg font-semibold">{cName}</div>
            <div className=" text-gray-400 text-sm">{cAddress}</div>
            <div className=" text-gray-400 text-sm">{cEmail}</div>
        </div>
    </>
  )
}

export default ClientData