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
    message: "What are the acceptance criterias?",
    name: "criteria",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "List your collaborators, if any, along with links to their Github profiles",
    name: "credits",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "Provide your deployed website, if applicable",
    name: "URL",
    validate: (value)=>{if(value){return true} else {return "please provide an answer to continue"}}
},
{
    type : "input",
    message: "Please provide your GitHub username",
    name: "userName",
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





// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./utils/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('New README created!')
    });
};
// function to initialize program
function init() {
    return inquirer.prompt(questions);
};
// function call to initialize program
init()
    
    .then(answers => generateMarkdown(answers))
    .then(newReadme => writeToFile('README.md', newReadme))
    .catch(err => {
        console.log(err);
    });