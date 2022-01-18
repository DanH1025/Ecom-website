require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async ()=>{
    try{
        //first delete every product in the database
        await Product.deleteMany({});

        //insert product data to database 
        await Product.insertMany(productsData);

        console.log("Data Import Success");
        process.exit();

    }catch(error){
        console.log("Data Import Failed");
        console.log(error);
        process.exit(1);
    }
};

importData();