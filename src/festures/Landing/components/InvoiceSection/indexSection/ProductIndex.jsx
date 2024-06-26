import React from 'react'

const ProductIndex = ({description, setDescription, quantity, setQuantity, unit, setUnit, price, setPrice}) => {
  return (
    <div className="">
        <div className="">
            <div className="flex flex-col pr-2">
                <label htmlFor="description">Enter the product detail:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Ex. Mountains wallpaper"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-10 border border-slate-300 rounded-lg py-3 pl-3  outline-none"
                />
            </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 py-3">
            <div className="flex flex-col ">
                <label htmlFor="price">Enter the product price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Ex. ₹100"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-[320px] h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="unit">Enter the product unit:</label>
                <input
                    type="text"
                    id="unit"
                    name="unit"
                    placeholder="Ex. 501"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-[320px] h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
                />
            </div>
            <div className="flex flex-col py-2">
                <label htmlFor="quantity">Enter the product quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Ex. 10"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-[320px] h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
                />
            </div>
        </div>
    </div>
  )
}

export default ProductIndex