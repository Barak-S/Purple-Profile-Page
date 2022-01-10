const express = require("express");
const router = express.Router();

// Load input validation
const User = require("../../models/User");

router.get('/:id', (req, res)=>{
  User.findById(req.params.id, function (err, docs) { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        res.json(docs)
    } 
  }) 
})


module.exports = router;