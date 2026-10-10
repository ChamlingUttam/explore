import "dotenv/config"
import express from "express"


const app = express()

const PORT  = Number(process.env.PORT) || 5000

app.get("/",(req,res)=>{
    res.send(`server is running at ${PORT}`)
})
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})



