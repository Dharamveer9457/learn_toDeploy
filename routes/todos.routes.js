const express = require("express")
const {todosModel} = require("../models/todo.model")

const todosRouter = express.Router()

todosRouter.post("/create", async (req,res)=>{
    try {
        const payload = req.body
    const todo = new todosModel(payload)
    await todo.save()
    res.send({"msg":"Todo Created"})
    } catch (err) {
        console.log(err)
        res.send({"err":err.message})
    }
})

todosRouter.get("/", async (req,res)=>{
    try {
        const todos = await todosModel.find()
        res.send({todos})
    } catch (error) {
        res.send({"err":"error while getting todos"})
    }
})

todosRouter.patch("/update/:id", async(req,res)=>{
    const todoID = req.params.id
    try {
        await todosModel.findByIdAndUpdate({_id:todoID, payload})
        res.send({"msg":`Todo with id:${todoID} has been updated`})
    } catch (error) {
        res.send({"err":"error while updating todo"})
    }
})

todosRouter.delete("/delete/:id", async(req,res)=>{
    const todoID = req.params.id
    try {
        await todosModel.findByIdAndDelete({_id:todoID})
        res.send({"msg":`Todo with id:${todoID} has been deleted`})
    } catch (error) {
        res.send({"err":"error while deleting todo"})
    }
})


module.exports = {
    todosRouter
}