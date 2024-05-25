import express, {Request,Response} from 'express' 
const controller = require('../controller/controller')
const routes = express.Router()

routes.get('/',(req:Request,res:Response)=>{
    res.render('tasks')
})
routes.get('/teams',(req:Request,res:Response)=>{
    res.render('randomTeams')
})

routes.post('/teams', controller.Randomizer)

routes.post('/done', controller.taskDone)
routes.post('/', controller.tasks)


module.exports = routes