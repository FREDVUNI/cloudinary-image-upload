const express = require("express")
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan")

app.use(morgan("tiny"))
dotenv.config({path:".env"})

const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",require("./routes/cloudinaryRouter"))  

app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
})
