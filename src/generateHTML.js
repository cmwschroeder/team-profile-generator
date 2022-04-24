const { Manager, Engineer, Intern } = require('../lib/team.js');

// This function will generatet the HTML card for a manager
function writeManager(manager) {
    return `
            <p>Yo</p>`;
}

// This function will generatet the HTML card for a engineer
function writeEngineer(engineer) {
    return "";
}

// This function will generatet the HTML card for a intern
function writeIntern(intern) {
    return "";
}

// This function will take in the answers from the user and use it to populate a string literal template 
// that will be returned to populate the html page
function generateHTML(data) {
    var write = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
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

    for(let i = 0; i < data.length; i++) {
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

    write += `
        </div>
    </div>

    <script src="https://cdn.tailwindcss.com"></script>
</body>
</html>`
    return write;
}

module.exports = generateHTML;