
type cartProp= {
    title : String,
    count : number
}

const Exercise4 = ({title , count } : cartProp) => {


  return (
    <div className='w-full'>
        <div className='w-full border'>

      <h1 className='bg-red-800 text-white p-2 w-full text-center '>Exercise 4  (props)</h1>
      <div className='p-2'>
<p>{title} {count}</p>
  
      </div>
        </div>
    </div>
  )
}

export default Exercise4
