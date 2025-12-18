import React from 'react'

const Exercise3 = () => {

    const introduction =(name  : String , age : number  )=>{
      return  `hii my name is ${name} and my age is ${age}`
        
    }
  return (
    <div className='w-full'>
        <div className='w-full border'>

      <h1 className='bg-red-800 text-white p-2 w-full text-center '>Exercise 3  (functions)</h1>
      <div className='p-2'>
{introduction('zoya' , 12)}
  
      </div>
        </div>
    </div>
  )
}

export default Exercise3
