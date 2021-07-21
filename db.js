const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://db-user:db-user@cluster0.cq6tu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true , useUnifiedTopology: true })
    .then(console.log("CONNECTED"))
    .catch((error) => console.log(error))
