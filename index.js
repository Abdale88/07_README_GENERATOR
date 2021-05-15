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
 ${license}
 

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
