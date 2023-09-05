
import express from 'express'
import {db,connectToDB} from './db.js';
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(cors())
//cors for retriving data and axios for sending data to database
app.get('/',(req,res)=>{
    res.send("Server running!");
})
app.get('/validemail/:email', async(req,res)=>{
    const result=await db.collection("db").findOne({email:req.params.email})
    res.json(result);
})
app.get('/validphone/:phonenumber', async(req,res)=>{
    const result=await db.collection("db").findOne({phonenumber:req.params.phonenumber})
    res.json(result);
})
app.get('/gets',async(req,res)=>{
    const result=await db.collection("db").find().toArray()
    res.json(result)
})
app.post('/input/:firstname/:secondname/:email/:phonenumber/:password/:userid',async(req,res)=>{
        const result=await db.collection("db").insertOne({firstname:req.params.firstname,secondname:req.params.secondname,email:req.params.email,phonenumber:req.params.phonenumber,password:req.params.password,userid:req.params.userid})
        res.json(result)
    })
app.get('/checkmail/:email', async(req,res)=>{
    const result=await db.collection("db").findOne({email:req.params.email})
    res.json(result);
})
app.get('/checkpass/:password', async(req,res)=>{
    const result=await db.collection("db").findOne({password:req.params.password})
    res.json(result);
})
app.post('/update/:email/:password',async(req,res)=>{
    const result=await db.collection("db").findOneAndUpdate({email:req.params.email},{$set:{password:req.params.password}})
    res.json(result)
})
connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
})
})