import React from 'react'

const Exercise1 = () => {

    let name :String ="Zoya";
    let age: number = 22;
    let isFrontend :boolean  = true

  return (

    <div className='border min-h-60 w-full '>
        <div>

      <h1 className='bg-red-800 text-white p-2 w-full text-center '>Exercise 1 </h1>
      <ol className='p-2'>
       <li>Name: {name}</li>
       <li>Age: {age}</li>
       <li> IsFrontend Developer : {isFrontend ? "Yes" : "No"}</li>
    </ol>
        </div>



         
    </div>
  )
}

export default Exercise1
