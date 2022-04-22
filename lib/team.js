/*
 * Employee class, holds values for id, name, and email and will return them
 * as the role when the inner functions are called
 */
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    
    getRole() {
        return "Employee";
    }
}

/*
 * Manager class that extends the employee class, contains same email, id, and name as employee class
 * but also has office number and will return it. Replaces the getRole function with the role of 
 * manager
 */
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

/*
 * Engineer class that extends the employee class, contains same email, id, and name as employee class
 * but also has github username and will return it. Replaces the getRole function with the role of 
 * engineer
 */
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

/*
 * Intern class that extends the employee class, contains same email, id, and name as employee class
 * but also has school name and will return it. Replaces the getRole function with the role of 
 * intern
 */
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = {
    Employee: Employee,
    Manager: Manager,
    Engineer: Engineer,
    Intern: Intern
}