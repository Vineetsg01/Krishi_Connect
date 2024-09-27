const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', false);
const url = process.env.MONGO_URL;

// Connect with database
mongoose.connect(url)
    .then(function () {
        console.log('Successfully connected to Database User Schema ...');
    })
    .catch(function (err) {
        console.log(err);
    }
);


const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    username: { 
        type: String, 
        required: true, 
        unique : true
    },
    email: { 
        type: String,
        unique: true 
    },
    mobile: { 
        type: String, 
        maxlength: 10,
    },
    password: { 
        type: String, 
        required: true 
    },
    carts : {
        type : Array, 
    }
},
    // to store time by default
    { timestamps: true }
);



const User = new mongoose.model("User", userSchema);


module.exports = User;