import React from 'react'
const Bar = () => {
  return (
    <div className=''>
    <div className="flex flex-col font-creepster items-center justify-center bg-black text-3xl text-red-600 font-bold space-y-14 w-24 h-screen">
  {['','D','E','A','T','H','N','O','T','E',''].map((l,i)=>
    <span key={i}>{l}</span>
  )}
  

</div>

    </div>
  )
}

export default Bar
