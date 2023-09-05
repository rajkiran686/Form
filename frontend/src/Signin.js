import { Button, Card, CardContent, Link, TextField, Typography,useMediaQuery } from '@material-ui/core'
import { Stack } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
  const Navigate=useNavigate()
  const isMobile = useMediaQuery('(max-width: 600px)');
  const submit=async(data)=>{
    try{
      const res=await axios.get("http://localhost:8000/checkmail/"+data.email)
      const res1=await axios.get("http://localhost:8000/checkpass/"+data.password)
      console.log("res",res.data)
      console.log("res1",res1.data)
      if(res.data&&res1.data){
        Navigate('/signin/success')
      }
      else if(res.data){
        alert("Entered password is wrong") 
      }
      else{
        alert("Email is not found")
      }

    }
    catch(e){
      alert(e)
    }
    
  }
  return (
    <div>
       <div style={{display:'flex', justifyContent:'center',marginTop:'150px'}}>
    <div  className={isMobile ? 'mobilecard':'card'}>
      <Card>
        <CardContent style={{padding:'30px'}}>
      <Typography variant='h3' color='secondary' style={{marginTop:'10px'}}><u>Sign In</u></Typography>
    <div style={{marginTop:'50px'}} >
    <form onSubmit={handleSubmit(submit)}  >
      <Stack Stack spacing={2} direction={isMobile?'column':'row'}>
        <Stack Stack spacing={2} direction='column' style={{textAlign:'left'}}> 
          <Typography variant='h4'>Email:</Typography>
      <TextField variant='outlined'color='primary' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the email ' {...register('email',{required:{value:true,message:'Please enter the email'},pattern: { value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message: "Invalid email address",},})} error={errors?.email} helperText={errors.email?.message}/>
          <Typography variant='h4'>Password:</Typography>
          <TextField variant='outlined'color='primary' type='password' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the password' {...register('password',{required:{value:true,message:'Please enter the password'},minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" }})} error={errors?.password} helperText={errors.password?.message}/>
        </Stack>  
      </Stack>
    <Button type='submit' variant='contained' size='large' color='primary' style={{marginTop:'50px'}}>Submit</Button>
    </form>  
  </div>
  <Link variant='h6' onClick={()=>Navigate('/setpassword')} >Forget password?</Link> 
  </CardContent>
  </Card>
  </div>
  </div>

  </div>
  )
}

export default Signup