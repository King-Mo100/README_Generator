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
    name: "descritption",
    message: "Write a description about your project"

},

{
    type: "input",
    name: "installation",
    message: "Describe your projects intsallation process"
},



];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .Prompt(questions)
    .then(answers => {
        console.log(answers);
    })

};

// function call to initialize program
                            