// TODO: Include packages needed for this application
var generator = require ("./generator");
var fs = require ("fs");
var inqurer = require ('inquirer');


// TODO: Create an array of questions for user input
let questions = [

{
    type : "input",
    message: "What is the title of your project?",
    name: "title"

    type : "input",
    message: "Provide a description of the project.",
    name: "description"


    type : "input",
    message: "Add a table of contents, if applicable.",
    name: "table of contents"


    type : "input",
    message: "What are the steps required to install your project?",
    name: "installation"


    type : "input",
    message: "How to use the project?",
    name: "Usage"

    type : "input",
    message: "List your collaborators, if any, along with links to their Github profiles",
    name: "credits"

    type : "input",
    message: "Which license did you use?",
    name: "license"


}





];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
