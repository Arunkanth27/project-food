const IngredientService = require('./ingredient.service');

exports.register =  function(req,res){
    console.log("Inside the register method in controller and the request body is ",req.body);
    IngredientService.register(req.body)
    .on('ERROR',function(){
        res.status(500).send({
            error:"Internal Server Error"
        })
    })
    .on('SUCCESS',function(){
        res.send({
            message:"Ingredient Registered"
        })
    })
    .on('DUPLICATE',function(){
        res.send({
            message:"Ingredient already exist"
        })
    })
 }

 exports.getAllIngredients = function(req,res){
    console.log("Inside the getAllIngredients function in ingredient.controller.js");
    IngredientService.getAllIngredients(req.body)
    .on('NULL',function(){
       res.send({
           message:"Invalid ingredientname/password"
       })
    })
    .on('ERROR',function(){
        res.send({
            message:"Internal Server Error"
        })
    })
    .on('SUCCESS',function(data){
        console.log(data);
        res.send({
            ingredients:data
        })
    })
}

exports.updateIngredient = function(req,res){
    console.log("Inside the updateIngredient function in ingredient.controller.js");
    IngredientService.updateIngredient(req.body).then(function(data){
        res.send({
            message:data
        })
    },function(data){
        res.send({
            message:data
        })
    });
}

exports.getIngredientPrice = function(req,res){
    console.log("Inside the getIngredientPrice function in ingredient.controller.js");
    IngredientService.getIngredientPrice(req.body)
    .on('Not Found',function(){
       res.send({
           message:"Invalid ingredient name"
       })
    })
    .on('ERROR',function(){
        res.send({
            message:"Internal Server Error"
        })
    })
    .on('SUCCESS',function(data){
        console.log(data);
        res.send({
            price:data.price
        })
    })
}