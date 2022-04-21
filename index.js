const inquirer = require('inquirer');
const fs = require('fs');

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
const team = [];


/*
 * Employee class, holds values for id, name, and email and will return them
 * as the role when the inner functions are called
 */
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = () => {
        return this.name;
    };
    this.getId = () => {
        return this.id;
    };
    this.getEmail = () => {
        return this.email;
    }
    this.getRole = () => {
        return "Employee";
    };
}

/*
 * Manager class that extends the employee class, contains same email, id, and name as employee class
 * but also has office number and will return it. Replaces the getRole function with the role of 
 * manager
 */
function Manager(name, id, email, officeNumber) {
    Employee.call(this, name, id, email);
    this.officeNumber = officeNumber;
    this.getRole = () => {
        return "Manager";
    };
    this.getOfficeNumber = () => {
        return this.officeNumber;
    }
}

/*
 * Engineer class that extends the employee class, contains same email, id, and name as employee class
 * but also has github username and will return it. Replaces the getRole function with the role of 
 * engineer
 */
function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;
    this.getRole = () => {
        return "Engineer";
    };
    this.getGithub = () => {
        return this.github;
    }
}

/*
 * Intern class that extends the employee class, contains same email, id, and name as employee class
 * but also has school name and will return it. Replaces the getRole function with the role of 
 * intern
 */
function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;
    this.getRole = () => {
        return "Intern";
    };
    this.getSchool = () => {
        return this.school;
    }
}

function init() {
    inquirer
    .prompt(managerQuestions).then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log("Error with inputs")
          }
    })
}

init();