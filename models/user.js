const mongoose = require('mongoose')
const Schema = mongoose.Schema
//import validator from 'validator';
//const validator = require('validator')

//Schema of the user
const userSchema = new Schema(
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

const User = mongoose.model('User', userSchema)
//export const User = mongoose.model('User', userSchema);

module.exports = User

/*
export default {
  User,
  userSchema,
};
*/