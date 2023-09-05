import { MongoClient } from 'mongodb'
let db;
async function connectToDB(cb){
    const url="mongodb+srv://gutturthirajkiran143:rajkiran@cluster.n17eyrp.mongodb.net/?retryWrites=true&w=majority"
    const client=new MongoClient(url)
    await client.connect()
    db=client.db("Database")
    cb()
}
export {connectToDB,db}