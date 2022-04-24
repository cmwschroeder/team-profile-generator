const { Manager, Engineer, Intern } = require('../lib/team.js');

// This function will generatet the HTML card for a manager
function writeManager(manager) {
    return `
            <div class="card w-96 bg-base-300 text-neutral-content m-3">
                <div class="w-full bg-secondary p-3">
                    <h2 class="text-3xl font-semibold m-2">${manager.getName()}</h2>
                    <p class="text-xl m-2">Manager</p>
                </div>
                <div class="card-body items-center text-center">
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <th>ID: ${manager.getId()}</th>
                            <tr class="active">
                                <th>Email: ${manager.getEmail()}</th>
                            </tr>
                            <tr>
                                <th>Office Number ${manager.getOfficeNumber()}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
}

// This function will generatet the HTML card for a engineer
function writeEngineer(engineer) {
    return `
            <div class="card w-96 bg-base-300 text-neutral-content m-3">
                <div class="w-full bg-secondary p-3">
                    <h2 class="text-3xl font-semibold m-2">${engineer.getName()}</h2>
                    <p class="text-xl m-2">Engineer</p>
                </div>
                <div class="card-body items-center text-center">
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <th>ID: ${engineer.getId()}</th>
                            <tr class="active">
                                <th>Email: ${engineer.getEmail()}</th>
                            </tr>
                            <tr>
                                <th>Github: <a href="https://github.com/${engineer.getGithub()}" class="btn btn-ghost text-blue-600 normal-case" target="_blank">${engineer.getGithub()}</a></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
}

// This function will generatet the HTML card for a intern
function writeIntern(intern) {
    return `
            <div class="card w-96 bg-base-300 text-neutral-content m-3">
                <div class="w-full bg-secondary p-3">
                    <h2 class="text-3xl font-semibold m-2">${intern.getName()}</h2>
                    <p class="text-xl m-2">Intern</p>
                </div>
                <div class="card-body items-center text-center">
                    <table class="table w-full">
                        <tbody>
                            <tr>
                                <th>ID: ${intern.getId()}</th>
                            <tr class="active">
                                <th>Email: ${intern.getEmail()}</th>
                            </tr>
                            <tr>
                                <th>School: ${intern.getSchool()}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
}

// This function will take in the answers from the user and use it to populate a string literal template 
// that will be returned to populate the html page
function generateHTML(data) {
    var write = `<!DOCTYPE html>
<html lang="en" data-theme="luxury">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.13.6/dist/full.css" rel="stylesheet" type="text/css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <div class="navbar bg-base-100">
        <h1 class=" normal-case text-3xl">My Team</a>
    </div>

    <div class="min-h-screen bg-base-200">
        <div class="flex flex-column flex-wrap justify-center">`;

    //Loop through the data array that we were given and write HTML for all of the team members
    for(let i = 0; i < data.length; i++) {
        //check to see what type of team member this is so we can print the correct data
        if(data[i].getRole() === "Manager") {
            write += writeManager(data[i]);
        }
        else if(data[i].getRole() === "Engineer") {
            write += writeEngineer(data[i]);
        }
        else {
            write += writeIntern(data[i]);
        }
    }

    //add the end of the html doc in
    write += `
        </div>
    </div>

    <script src="https://cdn.tailwindcss.com"></script>
</body>
</html>`
    return write;
}

module.exports = generateHTML;