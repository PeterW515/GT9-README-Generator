// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name:'title',
        type:'input',
        message:'What is the title of your project?',
    },
    {
        name:'description',
        type:'input',
        message:'What is the description of your project?',
    },
    {
        name:'install',
        type:'input',
        message:'What are the installation instructions for your project?',
    },
    {
        name:'usage',
        type:'input',
        message:'What is the usage information for your project?',
    },
    {
        name:'contribution',
        type:'input',
        message:'What are the contribution guidelines for your project?',
    },
    {
        name:'test',
        type:'input',
        message:'What are the test instructions for your project?',
    },
    {
        name:'license',
        type:'list',
        message:'What license is your project covered under?',
        choices:[
            'MIT License',
            'GNU GPLv3',
        ]
    },
    {
        name:'username',
        type:'input',
        message:'What is your Github username?',
    },
    {
        name:'email',
        type:'input',
        message:'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    let ansArr = [];
        inquirer.prompt(
            questions
        ).then((answers) => {
            let data = generateMarkdown(answers);
            writeToFile('README.md',data);
        })
}

// Function call to initialize app
init();


