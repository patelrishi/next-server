var mongodb = require('mongodb')

async function getDB(){
    const MongoClient = mongodb.MongoClient
  const server = await MongoClient.connect("mongodb+srv://nit:nit@cluster0.26gts.mongodb.net/")
   const db = server.db("sms")
   return db;
}

module.exports = getDB;