import express, {Request,Response} from 'express' 
module.exports = class controller{

    static Randomizer(req:Request,res:Response){
        const name1:string = req.body.name1
        const name2:string = req.body.name2
        const name3:string = req.body.name3
        const name4:string = req.body.name4

        const tema1:string = req.body.tema1
        const tema2:string = req.body.tema2
        const tema3:string = req.body.tema3
        const tema4:string = req.body.tema4
        
        const temas:string[] = []
        if(tema1){
            temas.push(tema1)
        }
        if(tema2){
            temas.push(tema2)
        }
        if(tema3){
            temas.push(tema3)
        }
        if(tema4){
            temas.push(tema4)
        }
        console.log(temas)
        
        function randomizer(temas: string[]): string[] {
            
            for (let i = temas.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [temas[i], temas[j]] = [temas[j], temas[i]];

            }
            return temas
          }
          const newTemas:string[] = randomizer(temas)
        
        
          const nomeTema1 = newTemas[0]
          const nomeTema2 = newTemas[1]
          const nomeTema3 = newTemas[2]
          const nomeTema4 = newTemas[3]
          
        
        res.render('randomTeams',{nomeTema1,nomeTema2,nomeTema3,nomeTema4,name1,name2,name3,name4})
    }
    static tasks(req:Request,res:Response){
        let task1:string = req.body.task1
        let task2:string = req.body.task2
        let task3:string = req.body.task3
        let task4:string = req.body.task4
        res.render('taskDone',{task1,task2,task3,task4})
    }
    static taskDone(req:Request,res:Response){
        let task1:string = req.body.task1
        let task2:string = req.body.task2
        let task3:string = req.body.task3
        let task4:string = req.body.task4
        const taskDone1 = req.body.taskDone1
        const taskDone2 = req.body.taskDone2
        const taskDone3 = req.body.taskDone3
        const taskDone4 = req.body.taskDone4
        

        
        console.log(task1)
        if(taskDone1 == 'on'){
            task1 = `(Concluido)`
        }
       
        if(taskDone2 == 'on'){
            task2 = `(Concluido)`
        }
        if(taskDone3 == 'on'){
            task3 = `(Concluido)`
        }
        if(taskDone4 == 'on'){
            task4 = `(Concluido)`
        }
        console.log(task1,task2,task3)
        console.log(taskDone1,taskDone2,taskDone3)
        res.render('taskDone',{task1,task2,task3,task4 })
        
        

    }
   
    
    
}