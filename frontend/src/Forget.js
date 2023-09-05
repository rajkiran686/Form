import { Button, Card, CardContent, Link, TextField, Typography,useMediaQuery } from '@material-ui/core'
import { Stack } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './App.css';
const Forget = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
  const Navigate=useNavigate()
  const isMobile=useMediaQuery('(max-width: 600px)')
  const submit=async(data)=>{
    if(data.password==data.repassword){
    try{
      const res=await axios.post("http://localhost:8000/update/"+data.email+"/"+data.password)
      if(res){
        alert("Successfully Updated")
        Navigate('/signin')
      }
    }
    catch(e){
        alert(e)
      }
    }
    else{
        alert("Password didnot match")
    }
  }
    
    
  
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center',marginTop:'150px'}}>
    <div  className={isMobile ? 'mobilecard':'card'}>
      <Card>
        <CardContent style={{padding:'30px'}}>
      <Typography variant='h3' color='secondary' style={{marginTop:'10px'}}><u>Set Password</u></Typography>
    <form onSubmit={handleSubmit(submit)}  style={{marginTop:'50px'}}>
      <Stack Stack spacing={2} direction={isMobile?'column':'row'}>
        <Stack Stack spacing={2} direction='column' style={{textAlign:'left'}}> 
          <Typography variant='h4'>Email:</Typography>
                <TextField variant='outlined'color='primary' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the email ' {...register('email',{required:{value:true,message:'Please enter the email'},pattern: { value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message: "Invalid email address",},})} error={errors?.email} helperText={errors.email?.message}/>
          <Typography variant='h4'>Password:</Typography>
                <TextField variant='outlined'color='primary' type='password' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the password' {...register('password',{required:{value:true,message:'Please enter the password'},minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" }})} error={errors?.password} helperText={errors.password?.message}/>
          <Typography variant='h4'>Re-enter Password:</Typography>
      <TextField variant='outlined'color='primary' type='password' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the password' {...register('repassword',{required:{value:true,message:'Please enter the password'},minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" }})} error={errors?.repassword} helperText={errors.repassword?.message}/>
      </Stack>    
      </Stack>
    <Button type='submit' variant='contained' size='large' color='primary' style={{marginTop:'50px'}}>Submit</Button>
    </form>  
    </CardContent>
    </Card>
  </div>
  </div>

  </div>
  )
}

export default Forget