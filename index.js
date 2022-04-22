const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./lib/team.js');
const { Manager } = require('./lib/team.js');

//Questions to ask the user from inquirer, specifically for the very first team memeber, the manager.
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "Enter team manager's name: ",
      },
      {
        type: 'input',
        name: 'managerId',
        message: "Enter team manager's id: ",
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "Enter team manager's email: ",
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Enter team manager's office number: ",
      },
      {
        type: 'list',
        name: 'next',
        message: 'Would you like to: a',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
      },
];

// This will hold all of the employees
const teamMembers = [];

function init() {
    inquirer
    .prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("Error with inputs")
          }
    })
}

init();