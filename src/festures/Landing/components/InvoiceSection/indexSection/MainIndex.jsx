import React from 'react'

const MainIndex = ({name, setName, address, setAddress, email, setEmail}) => {
  return (
    <div>
        <div  className="grid grid-cols-2 gap-6 pb-3 pr-2">
            <div className="flex flex-col">
                    <label htmlFor="name">Enter the name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
                    />
            </div>
            <div className="flex flex-col">
                <label htmlFor="address">Enter the address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email">Enter the email address:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 border border-slate-300 rounded-lg py-3 pl-3 outline-none"
                />
            </div>
        </div>
    </div>
  )
}

export default MainIndex