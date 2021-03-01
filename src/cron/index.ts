import * as cron from "node-cron";


// Schedule tasks to be run on the server.
const task01 = cron.schedule('*/10 * * * * *', function () {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa a cada 10 segundos ${timer} 🕐⚙`);
});

const task02 = cron.schedule('*/1 * * * * *', function () {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa a cada 1 segundos ${timer} 🕐⚙`);
});

const task03 = cron.schedule('5 * * * * *', () => {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa a cada minuto no 5º segundo ${timer} 🕐⚙`);
});

const task04 = cron.schedule('3 5 * * *', () => {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa todo dia as 05:03am ${timer} 🕐⚙`);
});

const task05 = cron.schedule('0 16 * * friday', () => {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa toda sexta as 16:00pm ${timer} 🕐⚙`);
});

const task06 = cron.schedule('2 3 1 1,4,7,10 *', () => {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa a cada trimestre do dia do primeiro dia do mês ${timer} 🕐⚙`);
});

const task07 = cron.schedule('5 10-18 * * *', () => {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa cinco minutos antes das 10:05 e 18:05 ${timer} 🕐⚙`);
});


const task08 = cron.schedule('*/5 8-18/2 * * *', () => {
    let timer = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`Executando tarefa a cada 2 horas entre 08am e 17:58pm ${timer} 🕐⚙`);
});



task01.start();
task02.start();
task03.start();
task04.start();
task05.start();
task06.start();
task07.start();
task08.start();
