const express = require("express");
const bodyParser = require("body-parser");
const User = require("../models/user");

const router = express.Router();
router.use(bodyParser.json())

router.get('/', (req, res) => {
    //res.json(taskList)
    User.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({message: error}))
})

router.post('/', (req, res) => {
   const user = new User({     
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    })
    
   user.save()
   .then(() => res.status(200).json({message: "User created"}))
   .catch(error => res.status(400).json({message: error}))
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(user => {
            firstName = req.body.firstName,
            lastName = req.body.lastName,
            address = req.body.address

            user.save()
            .then(() => res.status(200).json({message: "User updated"}))
            .catch(error => res.status(400).json({message: error}))
        })
        .catch(() => res.status(500).json({message: "Not found"}))    
})

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (error, result) => {
        if(result) {
            return res.status(200).json({message: "User deleted"})
        }      
        else {
            return res.status(400).json({message: "Not found"})
        }
    })
})

module.exports = router;
