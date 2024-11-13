var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var getDB = require('../common/dbConnection')
var ObjectId=mongodb.ObjectId;

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

router.put("/put-student", async function(req,res,next){
try{
  const id=req.query.id;
  const data=req.body.data;
const db = await getDB()
  const collection=db.collection('students')
  const result = await collection.updateOne({_id:ObjectId.createFromHexString(id)},{$set:data})
  res.send(result)
} catch (ex) {
console.error(ex);
res.send(ex);
}
})

router.delete('/delete-student/:id', async function(req,res,next){
 try{  
  var id = req.params.id;
  const db = await getDB()
  const collection = db.collection('students')
  const result =await collection.deleteOne({_id:ObjectId.createFromHexString(id)})
  res.send(result)
 } catch (ex) {
  console.error(ex);
  res.send(ex);
 }
})
//localhost:3030/student/register , post
module.exports=router;