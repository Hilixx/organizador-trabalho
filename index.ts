import express, {Request,Response} from 'express' 
const app = express()
app.use(express.json())
const port = process.env.port || 3000
const routes  = require('./routes/routes')
const exphbs = require('express-handlebars')
require('dotenv').config

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use('/tasks',routes)

app.get('/',(req:Request,res:Response)=>{
    res.render('index')
})




app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`)
})