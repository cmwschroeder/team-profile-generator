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

const engineerQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "Enter engineer's name: ",
  },
  {
    type: 'input',
    name: 'managerId',
    message: "Enter enigineer's id: ",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "Enter engineer's email: ",
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "Enter engineer's github username: ",
  },
  {
    type: 'list',
    name: 'next',
    message: 'Would you like to: a',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
  },
];

const internQuestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "Enter intern's name: ",
  },
  {
    type: 'input',
    name: 'managerId',
    message: "Enter intern's id: ",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "Enter intern's email: ",
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "Enter intern's school: ",
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

//function will take in user input and create an engineer class object and add it to the team
function addEngineer() {

}

//function will take in user input and create an intern class object and add it to the team
function addIntern() {

}

//create HTML page and write the file
function makePage() {

}

/*
 * This function will run when the program is ran, takes in user inputs for manager since we always need a manager, then will ask for 
 */
function init() {
    inquirer
    .prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        if(answers.next == "Add an Engineer") {
          addEngineer();
        } else if (answers.next == "Add an Intern") {
          addIntern();
        } else {
          makePage();
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("Error with inputs")
          }
    })
}

init();