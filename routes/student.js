var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')

router.post('/register', async function(req,res,next){
try {
  const data = req.body.data
  const MongoClient = mongodb.MongoClient
  const server = await MongoClient.connect("mongodb+srv://nit:nit@cluster0.26gts.mongodb.net/")
  const db = server.db('sms')
  const collection = db.collection('students')
  const result = await collection.insertOne(data)
  res.send(result)

} catch(ex){
    res.send(ex.message)
}
})

//localhost:3030/student/register , post
module.exports=router;