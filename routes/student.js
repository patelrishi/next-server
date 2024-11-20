var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var getDB = require('../common/dbConnection');
var jwt = require('jsonwebtoken');
var validateToken = require('../common/validateToken')

var ObjectId=mongodb.ObjectId;

router.post(
  '/register',
  validateToken,
  async function(req,res,next){
try {
  const data = req.body.data
  const db = await getDB();
  const collection = db.collection('students')
  const result = await collection.insertOne(data)
  res.send(result);
} catch(ex){
    res.send(ex.message)
}
})

router.get('/get-student',
  validateToken,
   async function(req,res,next){
  try{
    const db = await getDB();
    const collection = db.collection("students");
    const result= await collection.find().toArray()
    res.send(result);

  } catch(ex) {
    res.send(ex.message);
  }
})

router.put("/put-student",validateToken, async function(req,res,next){
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

router.delete('/delete-student/:id',validateToken,async function(req,res,next){
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

router.post("/login",validateToken, function(req,res,next){
  const {uid,pwd}=req.body
  if(uid == 'nit' && pwd == 'nitnit'){
    const token=jwt.sign({uid,pwd},"apptoken") //impliment Token
    res.send([{uid,pwd,token}])
  } else {
    res.send([])
  }
})
//localhost:3030/student/register , post
module.exports=router;