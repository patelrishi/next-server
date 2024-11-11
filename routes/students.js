var express = require('express');
var router = express.Router();

router.post('/register/:runs', function(req,res,next){

    //const n=req.query.name
    //const l=req.query.loc

    //const {name,loc}=req.query    //router.post('/register ;           /std/register?name=sachin&loc=ranchi
    //const {name,loc}=req.params   //router.post('/register/:name/:loc'; /std/register/abhishek/kashmir
   // const {name,loc}=req.body     //router.post('/register ;   //bodysection{
                                                                      //"name":"panth",
                                                                      //"loc":"delhi"
                                                                  //}
    //const {name,loc}=req.headers //router.post('/register ; //headersection key value dravid mumbai
     const {runs}=req.params
     const {name}=req.headers
     const {loc}=req.body
     const {hun}=req.query
 res.send(`Hey my name is ${name} my location is ${loc} my runs ${runs} my centuries ${hun}`)
} )
//http://localhost:3030/std/register ,post
module.exports = router;
