const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    completed: {type:Boolean},
    userID: {type:String}
  },{
    versionKey : false
  });
  
  // Create Todo model
  const todosModel = mongoose.model('todos', todoSchema);

  module.exports = {
    todosModel
  }