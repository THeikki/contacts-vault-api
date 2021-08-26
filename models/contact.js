const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Schema of the contact
const contactSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            cast: false,
        },
        lastName: {
            type: String,
            required: true,
            cast: false,
        },
        address: {
            type: String,
            required: true,
            cast: false,
        }
    }
);

const User = mongoose.model("Contact", contactSchema)

module.exports = User
