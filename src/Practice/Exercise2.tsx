import React from 'react'

type User = {
 name: String,
 age: number,
 role: String
}

const Exercise2 = () => {

  // let skills: string[] = ["React", "TypeScript"];

  const user : User[] = [
     { name: "Zoya", age: 22, role: "Frontend Developer" },
    { name: "Ayesha", age: 23, role: "UI Designer" },
  ]
  return (
    <div className='w-full border'>

      <h1 className='bg-red-800 text-white p-2 w-full text-center '>Exercise 2  (arrays and object)</h1>
      <div className='p-2'>

   {user.map((u , index)=>(
<div key={index}>
  <p>{u.name}</p>
  <p>{u.age}</p>
  <p>{u.role}</p>

  </div>
   ))}
      </div>
        </div>
  )
}

export default Exercise2
