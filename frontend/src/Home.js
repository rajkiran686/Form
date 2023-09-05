import { Button, useMediaQuery } from '@material-ui/core'
import React from 'react'
import image from './assets/img3.jpg'
import './App.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const Navigate=useNavigate()
  const isMobile=useMediaQuery('(max-width:600px)')
  function signin(){
    Navigate('/signin')
  }
  function signup(){
    Navigate('/signup')
  }

  return (
    <div style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'100vh',width:isMobile? '100%':'100vw',overflow:'hidden',backgroundPosition: 'center'}}>
        
        <div style={{display:'flex',justifyContent:'flex-end',marginTop:'10px'}}>
        <Button variant='contained' color='secondary' style={{marginLeft:'10px',marginRight:'10px'}} size='large' onClick={signup}>Signup</Button>
        <Button variant='contained' size='large' onClick={signin}>Signin</Button>
        </div>

        


    </div>
  )
}

export default Home