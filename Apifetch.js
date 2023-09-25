import React, { useEffect, useState } from 'react'

const Apifetch = () => {
    const [Apidata, setApidata] = useState([])
    useEffect(() => {
      const url ='https://jsonplaceholder.typicode.com/posts';
      fetch(url).then(res=> res.json()).then(res=>setApidata(res)).catch(err=>{
        console.log(err)
      })
    }, [])
    
  return (
    <div>
      {Apidata.map((e)=>(
         <div>{e.body}</div>
      ))}
    </div>
  )
}

export default Apifetch
