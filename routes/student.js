var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var getDB = require('../common/dbConnection')

router.post('/register', async function(req,res,next){
try {
  const data = req.body.data
  const db = await getDB();
  const collection = db.collection('students')
  const result = await collection.insertOne(data)
  res.send(result)

} catch(ex){
    res.send(ex.message)
}
})

router.get('/get-student', async function(req,res,next){
  try{
    const db = await getDB();
    const collection = db.collection("students");
    const result= await collection.find().toArray()
    res.send(result);

  } catch(ex) {
    res.send(ex.message);
  }
})

//localhost:3030/student/register , post
module.exports=router;