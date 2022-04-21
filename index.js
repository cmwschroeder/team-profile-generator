const inquirer = require('inquirer');
const fs = require('fs');

//Questions to ask the user from inquirer
const questions = [];

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