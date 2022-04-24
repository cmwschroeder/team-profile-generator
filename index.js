const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./lib/team.js');
const { Manager, Engineer, Intern } = require('./lib/team.js');
const generateMarkdown = require("./src/generateHTML.js");

//Questions to ask the user from inquirer, specifically for the very first team memeber, the manager.
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "Enter team manager's name: ",
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter team manager's id: ",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter team manager's email: ",
  },
  {
    type: 'input',
    name: 'officeNo',
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
    name: 'name',
    message: "Enter engineer's name: ",
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter enigineer's id: ",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter engineer's email: ",
  },
  {
    type: 'input',
    name: 'github',
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
    name: 'name',
    message: "Enter intern's name: ",
  },
  {
    type: 'input',
    name: 'id',
    message: "Enter intern's id: ",
  },
  {
    type: 'input',
    name: 'email',
    message: "Enter intern's email: ",
  },
  {
    type: 'input',
    name: 'school',
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
  inquirer
    .prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        if(answers.next == "Add an Engineer") {
          addEngineer();
        } else if (answers.next == "Add an Intern") {
          addIntern();
        } else {
          makePage();
        }
    })
}

//function will take in user input and create an intern class object and add it to the team
function addIntern() {
  inquirer
  .prompt(internQuestions).then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      if(answers.next == "Add an Engineer") {
        addEngineer();
      } else if (answers.next == "Add an Intern") {
        addIntern();
      } else {
        makePage();
      }
  })
}

//create HTML page and write the file
function makePage() {
  var page = generateMarkdown(teamMembers);
  fs.writeFile('./dist/index.html', page, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("file written");
    }
  });
}

/*
 * This function will run when the program is ran, takes in user inputs for manager since we always need a manager, then will ask for 
 */
function init() {
    inquirer
    .prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
        teamMembers.push(manager);
        if(answers.next == "Add an Engineer") {
          addEngineer();
        } else if (answers.next == "Add an Intern") {
          addIntern();
        } else {
          makePage();
        }
    })
}

init();