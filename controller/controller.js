"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = class controller {
    static Randomizer(req, res) {
        const name1 = req.body.name1;
        const name2 = req.body.name2;
        const name3 = req.body.name3;
        const name4 = req.body.name4;
        const tema1 = req.body.tema1;
        const tema2 = req.body.tema2;
        const tema3 = req.body.tema3;
        const tema4 = req.body.tema4;
        const temas = [];
        if (tema1) {
            temas.push(tema1);
        }
        if (tema2) {
            temas.push(tema2);
        }
        if (tema3) {
            temas.push(tema3);
        }
        if (tema4) {
            temas.push(tema4);
        }
        console.log(temas);
        function randomizer(temas) {
            for (let i = temas.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [temas[i], temas[j]] = [temas[j], temas[i]];
            }
            return temas;
        }
        const newTemas = randomizer(temas);
        const nomeTema1 = newTemas[0];
        const nomeTema2 = newTemas[1];
        const nomeTema3 = newTemas[2];
        const nomeTema4 = newTemas[3];
        res.render('randomTeams', { nomeTema1, nomeTema2, nomeTema3, nomeTema4, name1, name2, name3, name4 });
    }
    static tasks(req, res) {
        let task1 = req.body.task1;
        let task2 = req.body.task2;
        let task3 = req.body.task3;
        let task4 = req.body.task4;
        res.render('taskDone', { task1, task2, task3, task4 });
    }
    static taskDone(req, res) {
        let task1 = req.body.task1;
        let task2 = req.body.task2;
        let task3 = req.body.task3;
        let task4 = req.body.task4;
        const taskDone1 = req.body.taskDone1;
        const taskDone2 = req.body.taskDone2;
        const taskDone3 = req.body.taskDone3;
        const taskDone4 = req.body.taskDone4;
        console.log(task1);
        if (taskDone1 == 'on') {
            task1 = `(Concluido)`;
        }
        if (taskDone2 == 'on') {
            task2 = `(Concluido)`;
        }
        if (taskDone3 == 'on') {
            task3 = `(Concluido)`;
        }
        if (taskDone4 == 'on') {
            task4 = `(Concluido)`;
        }
        console.log(task1, task2, task3);
        console.log(taskDone1, taskDone2, taskDone3);
        res.render('taskDone', { task1, task2, task3, task4 });
    }
};
