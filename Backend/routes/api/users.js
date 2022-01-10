const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const ObjectId = require('mongodb').ObjectID

router.get('/:id', (req, res)=>{
  User.findById(req.params.id, (err, docs) => { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        res.json(docs)
    } 
  }) 
})

router.put('/update/:id', (req,res)=>{
    console.log(req.body.user)
    User.findOneAndUpdate({ _id: ObjectId(req.params.id) }, {$set: req.body.user }, { upsert: true })
        .then(result => {
            res.send(result)
        })
        .catch(error => console.error(error))
})


module.exports = router;