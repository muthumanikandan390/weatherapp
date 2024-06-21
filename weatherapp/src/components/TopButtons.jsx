



const TopButtons = () => {

const cities = [
  {
    id : 1,
    name : 'london'
  },
  {
    id : 2,
    name : 'sydney'
  },
  {
    id : 3,
    name : 'tokyo'
  },
  {
    id : 4,
    name : 'paris'
  },
  {
    id : 5,
    name : 'toronto'
  },
]


  return (
    <div className='flex items-center justify-around my-6'>
      {
        cities.map((city)=> ( <button  key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'>{city.name}</button>))
      }

    </div>

  )
}

export default TopButtons