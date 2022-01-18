const Product = require('../models/Product');



//function to get all the data from the database
const getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find({});

        res.json(products);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
}

//function to get one specific data/prooduct from the database
const getProductById = async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);

        res.json(product);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
}


module.exports={
    getAllProducts,
    getProductById,
};