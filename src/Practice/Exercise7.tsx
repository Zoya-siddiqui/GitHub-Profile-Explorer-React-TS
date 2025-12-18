import React, { useState } from 'react'

type Employee ={
    name : string ,
    email : string ,
    age : number 
}

const Exercise7 = () => {
    const [form , setForm ]  = useState<Employee>(
        {
            name  :"", 
            email :"",
            age   :0         
        }
    )

    const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value} = e.target;

        setForm({
            ... form,
            [name] :  value
        })

    }

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
        <div className='w-full border'>

      <h1 className='bg-red-800 text-white p-2 w-full text-center '>Exercise 7  (arrays and object)</h1>
      <div className='p-2'>
  
  
  <form onSubmit={handleSubmit}>

  
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleInputChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleInputChange}
      />

      <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleInputChange}
      />

      <button className='bg-red-600  px-2 ' type='submit'> Submit </button>
  </form>
   
      </div>
        </div>
  )
}

export default Exercise7
