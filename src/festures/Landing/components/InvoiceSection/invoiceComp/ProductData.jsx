import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductData = ({ description, quantity, unit, price, amount, setAmount}) => {

    useEffect(() => {
        setAmount(price * quantity)
    }, [price, quantity, setAmount])
    
    const calculateAmount = () =>{
        return price * quantity
    }

  return (
    <>
        <div className="mx-4 h-auto">
            <table className="w-full table-auto border-separate border-spacing-1 border border-slate-500">
                <thead>
                    <tr className="h-10 bg-slate-400 mb-2">
                        <th className="w-[400px]">Description</th>
                        <th className="w-[105px]">Quantity</th>
                        <th className="w-[105px]">Unit</th>
                        <th className="w-[105px]">Price</th>
                    </tr>
                </thead>

                <tbody className="">
                    <tr className="h-10 bg-slate-300">
                        <td className="w-[400px] pl-2">{description}</td>
                        <td className="w-[105px] pl-2">{quantity}</td>
                        <td className="w-[105px] pl-2">{unit}</td>
                        <td className="w-[105px] pl-2">₹{price}</td>
                    </tr>
                </tbody>
            </table>

            <div className="flex justify-end gap-5 text-xl font-bold px-2 pt-6 pb-10">
                <p className="">Total: </p>
                <div className="">₹{calculateAmount()}</div>
            </div>

            {/* <Link to="" onClick={() => setShowInvoice(false)} className=" bg-blue-400
                        text-white font-bold py-2 px-8 rounded shadow
                        border-2 border-blue-400 hover:bg-transparent hover:text-blue-400
                        transition-all duration-300 ">Edit Info</Link> */}
        </div>
    </>
  )
}

export default ProductData