const MainData = ({name, address, email}) => {
  return (
    <>
        <div className="flex flex-col py-10">
            <div className="flex justify-end pr-2 text-2xl font-semibold">
              {name}
            </div>
            <div className="flex justify-end pr-2 text-gray-400 text-sm">
              {address}
            </div>
            <div className="flex justify-end pr-2 text-gray-400 text-sm">
              {email}
            </div>
        </div>
    </>
  )
}

export default MainData