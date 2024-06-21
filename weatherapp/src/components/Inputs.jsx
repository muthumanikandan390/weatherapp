import {BiSearch , BiCurrentLocation} from "react-icons/bi"

const Inputs = () => {
  return (
    <div className="flex flex-row my-6 justify-center">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
      <input
  type='text'
  placeholder='type here ...'
  className="text-gray-500 text-xl font-light
  p-2 w-96 shadow-xl capitalize
  focus:outline-none placeholder:lowercase"
/>
<BiSearch size={30} className="cursor-pointer transition ease-out hover:scale-125"/>
<BiCurrentLocation size={30} className="cursor-pointer transition ease-out hover:scale-125"/>

 </div>
 <button>+</button>
 </div>
  )
}

export default Inputs
