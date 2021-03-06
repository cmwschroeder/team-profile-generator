const inquirer = require('inquirer');
const fs = require('fs');
const team = require('./lib/team.js');
const { Manager, Engineer, Intern } = require('./lib/team.js');
const generateHTML = require("./src/generateHTML.js");

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
];

//questions for any of the engineer team members
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
];

//questions for the intern team member(s)
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
];

//question to ask to determine if we are adding more team members or if we are done
const menuQuestion = [
  {
    type: 'list',
    name: 'next',
    message: 'Would you like to: ',
    choices: ['Add an Engineer', 'Add an Intern', 'Finish building team'],
  }
]

// This will hold all of the employees
const teamMembers = [];

//function will take in user input and create an engineer class object and add it to the team
function addEngineer() {
  inquirer
    .prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        menu();
    })
}

//function will take in user input and create an intern class object and add it to the team
function addIntern() {
  inquirer
  .prompt(internQuestions).then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      menu();
  })
}

//this function handles the menu for selecting if we want to add another team member(and which), or if we are done
function menu() {
  inquirer
  .prompt(menuQuestion).then((answers) => {
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
  var page = generateHTML(teamMembers);
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
        menu();
    })
}


//call to start the inquirer prompts on program start
init();