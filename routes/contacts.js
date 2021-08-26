const express = require("express");
const bodyParser = require("body-parser");
const Contact = require("../models/contact");

const router = express.Router();
router.use(bodyParser.json())

router.get("/", (req, res) => {
    
    Contact.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({message: error}))
})

router.post("/", (req, res) => {
   const contact = new Contact({     
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address
    })
    
   contact.save()
   .then(() => res.status(200).json({message: "New contact created"}))
   .catch(error => res.status(400).json({message: error}))
})

router.delete("/:id", (req, res) => {
    Contact.findByIdAndDelete(req.params.id, (error, result) => {
        if(result) {
            return res.status(200).json({message: "Contact deleted"})
        }      
        else {
            return res.status(400).json({message: error})
        }
    })
})

module.exports = router;
