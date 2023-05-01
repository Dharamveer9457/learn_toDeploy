const express = require("express");
const app = express();
const {connection} = require("./db");
const { userRouter } = require("./routes/user.routes")
const { todosRouter } = require("./routes/todos.routes")
const {auth} = require("./middlewares/auth")
const cors = require("cors")


app.use(express.json())
app.use(cors())

app.use("/users",userRouter)
app.use(auth)
app.use("/todos", todosRouter)

app.get("/Home",(req,res)=>{
    res.send("HOME PAGE")
})

app.use("/users",userRouter)

app.listen(4500, async ()=>{
    try {
        await connection
        console.log(`Connected to MongoDB at 4500...`)
    } catch (error) {
        console.log(error)
        console.log("Something went wrong while connecting to DB")
    }
})