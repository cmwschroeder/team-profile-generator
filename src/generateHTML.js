const { Manager, Engineer, Intern } = require('../lib/team.js');

// This function will take in the answers from the user and use it to populate a string literal template 
// that will be returned to populate the html page
function generateHTML(data) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
</head>
<body>
    <p>Hey<\p>
</body>
</html>`;
}

module.exports = generateHTML;