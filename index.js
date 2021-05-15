// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



function writeToFile(data) {
    fs.writeFile("readMeGenerator.md", data, (err) =>
       err ? console.error(err) : console.log("Success"),
       
    );
}

