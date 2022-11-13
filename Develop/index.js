// TODO: Include packages needed for this application
const fs = require ("fs");
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =
    [

{
    type : "input",
    message: "What is the title of your project?",
    name: "title",
    // validate properties to check that the user provided an answer
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "Provide a description of the project.",
    name: "description",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "Add a table of contents, if applicable.",
    name: "contents",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "What are the steps required to install your project?",
    name: "installation",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "How to use the project?",
    name: "usage",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "List your collaborators, if any, along with links to their Github profiles",
    name: "credits",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "list",
    message: "Which license did you use?",
    name: "license",
    choices:['MIT licence','GPL licence','Apache license', 'N/A'],
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
}
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile (`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then ((answers)=>{
        console.log(answers)
    })
}

// Function call to initialize app
init();
