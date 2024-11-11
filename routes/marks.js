var express = require('express');
var router = express.Router();

router.post('/save', function (reqObj,resObj) {
//received the reques
//take the data from req
//connect to DB
//do required operation
//prepare the response
//send response back to Client
resObj.send("hellow express app")
})
//http://localhost:3030/marks/save ,post

module.exports=router;