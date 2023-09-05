import React, { useEffect, useState } from 'react'
import axios from 'axios'   
import { useLocation } from 'react-router-dom'
const Success = () => {
  const[data,setdata]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/gets" )
    .then((res)=>{
      setdata(res.data)
      console.log(res.data)
    })
    .catch((e)=>{
      alert(e)
    })
  },[])
  
  return (
    <div>
      <h1 style={{color:'blue'}}>The List Of Registered Candidates</h1>
        <div>
          {
            data.map((val)=>{
              return(
                <div>
                  <h1>{val.firstname} {val.secondname}</h1>
                  </div>
              )
            })
          }
        </div> 
    </div>
  )
}

export default Success