// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



function writeToFile(data) {
    fs.writeFile("readMeGenerator.md", data, (err) =>
       err ? console.error(err) : console.log("Success"),
       
    );
}

function readMe(data){
    const {title, Description, install, usage, license, contribution, testing, github, email, info}  = data;
   
    const useData =  
    `
## ${title}

## License
   ${license === 'MIT' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-coral.svg)`: ''}
   ${license === 'Apache' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`: ''}
   ${license === 'GPLv2' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`: ''}
   ${license === 'GPLv3' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`: ''}
   ${license === 'Unlicense' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-blueviolet.svg)`: ''}
   ${license === 'LGPLv3' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`: ''}
   ${license === 'AGPLv3' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`: ''}
   ${license === 'Other' ? `GitHub License ![GitHub license](https://img.shields.io/badge/license-${license}-yellow.svg)`: ''}


## Description
 ${Description}  
   
   ## Table of Contents

   * [Installation](#installation)

   * [Usage](#usage)

   * [License](#license)

   * [Contribution](#contributing)

   * [Testing](#testing)

   * [Questions](#questions)

## Installation
  ${install}

## Usage
 ${usage}

## License
This project is licensed under the ${license} license.
 
 

## Contributing
 ${contribution}

## Testing
 ${testing}


## Questions
${info}
${email}
![Here is a link to my GitHub]https://github.com/${github}
     
    `
   
    writeToFile(useData);
}


// TODO: Create an array of questions for user input
const questions = [
    {
  
      type: "input",
       message: "What's the title",
       name: "title",
    },
    {
      type: "input",
       message: "Describe what your app does",
       name: "Description",
    },
    {
      type: "input",
       message: "What are the steps required to install your project?",
       name: "install",
    },
    {
      type: "input",
       message: "Please Provide instructions on how to use your app.?",
       name: "usage",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'Unlicense', 'LGPLv3', 'AGPLv3', 'Other'],
    },
    {
        type: "input",
        message: "Who contributed to this app",
        name: "contribution",
    },
    {
        type: "input",
        message: "How to run tests in your app?",
        name: "testing",
    },
    {
        type: "input",
        message: "What's GitHub user name?",
        name: "github"
    },
    {
        type: "input",
        message: "What's your email?",
        name: "email",
    },
    {
        type: "input", 
        message: "how people should reach you for additional questions",
        name: "info"
    },
     ];


// TODO: Create a function to initialize app
function init(questions) {
    inquirer.prompt(questions).then((data) => {
        readMe(data);
    })
 }


 // Function call to initialize app
 init(questions);
 
