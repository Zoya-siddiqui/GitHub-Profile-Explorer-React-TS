import React, { useState } from 'react'

const Exercise6 = () => {
    const [name , setName] = useState<string>('');

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value)
    }
  return (
        <div className='w-full border'>

      <h1 className='bg-red-800 text-white p-2 w-full text-center '>Exercise 6 form </h1>
      <div className='p-2'>
<form>
    <input 
    type='text'
    value={name}
    className='border'
    onChange={handleInputChange}
     />
     <p>{name}</p>
</form>
  
      </div>
        </div>
  )
}

export default Exercise6
