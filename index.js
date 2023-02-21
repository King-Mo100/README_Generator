const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},

{
    type: "input",
    name: "description",
    message: "Write a description about your project"

},

{
    type: "input",
    name: "installation",
    message: "Describe your projects intsallation process"
},

{
    type: "input",
    name: "usage",
    message: "What is the usage of this project?"

},

{
    type: "list",
    name: "license",
    message: "Choose the licence for this project",
    choices: ['Apache','BSD-2-Clasue','GNU','MIT','ISC'],
},

{
    type: "input",
    name: "contributing",
    message: "Who contributed towards this project?",

},

{
    type: "input",
    name: "tests",
    message: "What are the instructions to test this project?",
},



{
    type: "input",
    name: "githubUsername",
    message: "What is your github ursername?",
},

{
    type: "input",
    name: "email",
    message: "What is your email address?",
},


];

// function to write README file
function writeToFile(fileName, data) {

fs.writeFile('newREADme.md',data,(err) => {
    if (err) {
        console.log(error)
    } else{
        console.log('Success!')
    }
});
}
// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
             const markdown = generateMarkdown(answers);
             writeToFile('newREADME.md',markdown);
    });

};

// function call to initialize program
init();