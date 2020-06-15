// get local JSON data for jobs
let jobs = require('../data/jobs.json');

// get and store length of jobs obj 
// let jobsNumber = Object.keys(jobs).length;

// random number generator
const randomNumber = Math.floor(Math.random() * 20) + 1;

//random key get
let randomKey = Object.keys(jobs)[Math.floor(Math.random()*Object.keys(jobs).length)]

// random value get
// console.log(jobs[Object.keys(jobs)[Math.floor(Math.random()*Object.keys(jobs).length)]]);

//random job get based on jobs.json length
let randomJob = jobs[Object.keys(jobs)[Math.floor(Math.random()*Object.keys(jobs).length)]]; 

console.log(randomJob);