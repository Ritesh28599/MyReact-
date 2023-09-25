import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
  
  const [ApiData, setApiData] = useState([]);
  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>setApiData(res.data))
  .catch((error)=>{
    console.log("error is here", error)
  })
  }, [])
  
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
     
    </tr>
  </thead>
  <tbody>
  {ApiData.map((e)=>(
    <tr >
      <td>{e.id}</td>
       
      <td>{e.title}</td>
      <td>{e.body}</td>
    </tr>
       ))}
  </tbody>
</table>
      
    </div>
  )
}

export default Api
