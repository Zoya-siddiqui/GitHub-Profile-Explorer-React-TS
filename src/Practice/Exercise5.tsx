import React, { useState } from 'react'

const Exercise5 = () => {

    const [count , setCount] = useState<number>(0)
  return (
    <div className='w-full'>
        <div className='w-full border'>

      <h1 className='bg-red-800 text-white p-2 w-full text-center '>Exercise 2  (arrays and object)</h1>
      <div className='p-2 flex gap-x-4'>
<p>{count}</p>
<button onClick={()=> setCount(count+1)} className='bg-red-700 w-full text-white  '>+</button>
      </div>
        </div>
    </div>
  )
}

export default Exercise5
