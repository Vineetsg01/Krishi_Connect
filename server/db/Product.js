const mongoose = require("mongoose");
require('dotenv').config();


mongoose.set('strictQuery', false);
const url = process.env.MONGO_URL;

// Connect with database
mongoose.connect(url)
    .then(function () {
        console.log('Successfully connected to Database Product Schema ...');
    })
    .catch(function (err) {
        console.log(err);
    }
    );


const productSchema = new mongoose.Schema({
    imgUrl: {
        type: String
    },
    shortTitle: {
        type: String,
    },
    longTitle: {
        type: String,
    },
    price: {
        type: Object,
    },
    description: {
        type: String,
    },
    discount: {
        type: String,
    },
    tagline: {
        type: String,
    },
    category: {
        type: String,
        enum: ["SEEDS", "VEGETABLES", "FRUITS", "CROPS", "PESTICIDES", "FERTILIZERS", "EQUIPMENTS", "OTHERS"],
    },
},
    // to store time by default
    { timestamps: true }
);



const Product = new mongoose.model("Product", productSchema);


module.exports = Product;