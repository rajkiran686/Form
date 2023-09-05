import { Button, Card, CardContent, TextField, Typography,useMediaQuery } from '@material-ui/core'
import { Link, Stack } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// import image from './assets/img5.png'


const Signin = () => {
  const {register,handleSubmit,formState:{errors}}=useForm({mode:'all'})
  const Navigate=useNavigate()
  const isMobile = useMediaQuery('(max-width: 600px)');
  const submit=async(data)=>{
    if(data.password!==data.cpassword){
      alert("password not match")
    }
    else{
      try{
        
      const res=await axios.get("http://localhost:8000/validemail/"+data.email)
      const res1=await axios.get("http://localhost:8000/validphone/"+data.phonenumber)
      if(res.data&&res1.data){
        alert("Email and Phone number Already exists")
      }
      else if(res.data){
        alert("email "+data.email+" Already exists")
      }
      else if(res1.data){
        alert("phonenumber "+data.phonenumber+" Already exists")
      }
      else{
      const res2=await axios.post("http://localhost:8000/input/"+data.firstname+"/"+data.secondname+"/"+data.email+"/"+data.phonenumber+"/"+data.password+"/"+data.userid)
      if(res2){
      alert("successfully saved!")
      Navigate('/signin')
      }
      }
    }
    catch(e){
      alert(e)
    } 
    }
  }
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center',marginTop:'30px'}}>
    <div  className={isMobile ? 'mobilecard' : 'card'} >
      <Card style={{height:'auto',padding:'30px'}}> 
        <CardContent >
      <Typography variant='h3' color='secondary' style={{marginTop:'10px'}}><u>Sign Up</u></Typography>
    <div style={{marginTop:'50px'}} >
      <form onSubmit={handleSubmit(submit)}  >
      <Stack  direction={isMobile ? 'column' : 'row'} spacing={isMobile ? 1 : 2} >
          <Stack direction="column" spacing={isMobile ? 1 : 2}> 
        
                    
            <Typography  variant='h4' >First Name:</Typography>
              <TextField variant='outlined'color='primary' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the first name' {...register('firstname',{required:{value:true,message:'please enter the first name'},pattern: {message: 'Please enter valid name',value: /^[a-zA-Z\u00C0-\u017F]+(?:\s[a-zA-Z\u00C0-\u017F]+)*$/},})} error={errors?.firstname} helperText={errors.firstname?.message}/>

            <Typography variant='h4'>Email:</Typography>
                    <TextField variant='outlined'color='primary' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the email ' {...register('email',{required:{value:true,message:'Please enter the email'},pattern: { value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message: "Invalid email address",},})} error={errors?.email} helperText={errors.email?.message}/>

            <Typography variant='h4'>Password:</Typography>
                    <TextField variant='outlined'color='primary' type='password' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the password' {...register('password',{required:{value:true,message:'Please enter the password'},minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" }})} error={errors?.password} helperText={errors.password?.message}/>

            <Typography variant='h4'>UserId:</Typography>
                    <TextField variant='outlined'color='primary' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the userid' {...register('userid',{required:{value:true,message:'Please enter the userid'}})} error={errors?.userid} helperText={errors.userid?.message}/>
 
          </Stack>
        <Stack  direction="column" spacing={isMobile ? 1 : 2}   >
       

          
        <Typography variant='h4'>Second Name:</Typography>
                <TextField variant='outlined' label='Enter the second name' style={{ width: isMobile ? '100%' : '350px' }} {...register('secondname',{required:{value:true,message:'This field is required'},pattern: { value:/^[A-Za-z]+$/,message: "invalid name "}})} error={errors?.secondname} helperText={errors.secondname?.message} />

      <Typography variant='h4'>Phone Number:</Typography>
              <TextField variant='outlined'color='primary' style={{ width: isMobile ? '100%' : '350px' }} label='Enter the phone number' {...register('phonenumber',{required:{value:true,message:'This field is required'},pattern: { value:/^[0-9]+$/,message: "invalid number"},minLength: { value: 10, message: "**Phonenumber must be 10 digits" }, maxLength: { value: 10, message: "**Phonenumber doesn't exceed 10 digits" }})} error={errors?.phonenumber} helperText={errors.phonenumber?.message}/>

      <Typography variant='h4'>Confirm Password:</Typography>
              <TextField variant='outlined'color='primary' type='password' style={{ width: isMobile ? '100%' : '350px' }} label='Re-enter the password' {...register('cpassword',{required:{value:true,message:'This field is required'}, minLength: { value: 4, message: "**Password must be more than 4 characters" }, maxLength: { value: 12, message: "**Password cannot exceed more than 12 characters" }})} error={errors?.cpassword} helperText={errors.cpassword?.message} />
   </Stack>   
        
      </Stack>
     
      <div style={{marginTop:'50px'}}>
      <Button type='submit' variant='contained' size='large' color='primary'>Submit</Button>
      {/* <Button  onClick={fun} variant='contained' size='large' color='primary' style={{marginLeft:'10px'}}>Login</Button> */}
      <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
      <Typography variant='h5' color='textPrimary'>Have an account?</Typography>
      <Link variant='h5' onClick={()=>Navigate('/signin')} style={{marginLeft:'20px'}}>Sign In</Link>
      </div>
      </div>
      </form>
      </div>
      </CardContent>
      </Card>
      </div>

      
    </div>
    </div>
  )
}

export default Signin

