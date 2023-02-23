// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
// I created all the questions to construct the README
const questions = ["What is the title of your project?", 
    "What was your motivation?", 
    "Why did you build this project?", 
    "What problem does it solve?",
    "What did you learn?",
    "How is the application installed?",
    "How is this application used?",
    "What are the contribution guidlines?",
    "What are the test instructions?",
    "what type of lisence would you like to add?",
    "What is your Github username?",
    "What us your email?"

];

// I deconstructed the array to make it easier to access it's elements. 

const [one, two, three, four, five, installation, usage, contribution, tests, license, github, email] = questions

// function licenseBadge(value) {
//     if (value === 'MIT') {
//                 return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//               } if (value === 'Boost') {
//                 return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
//               } if (value === 'Mozilla') {
//                 return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
//               } if (value === 'Unlisenced') {
//                 return "None";
// }
// }

// licenseBadge()

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: one,
        },
        {
            type: 'input',
            name: 'motivation',
            message: two, 
        },
        {
            type: 'input',
            name: 'build',
            message: three,
        },
        {
            type: 'input',
            name: 'solve',
            message: four,
        },
        {
            type: 'input',
            name: 'learn',
            message: five,
        },
        {
            type: 'input',
            name: 'installation',
            message: installation,
        },
        {
            type: 'input',
            name: 'usage',
            message: usage,
        },
        {
            type: 'input',
            name: 'contribution',
            message: contribution,
        },
        {
            type: 'input',
            name: 'tests',
            message: tests,
        },
        {
            type: 'list',
            name: 'license',
            message: license,
            choices: [
                {value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', name: 'MIT'},
                {value: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', name: 'Boost'}, 
                {value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', name: 'Mozzilla'}, 
                {value: 'none', name: 'Unlisenced'}
            ], 
        },
        {
            type: 'input',
            name: 'github2',
            message: github,
        },
        {
            type: 'input',
            name: 'email2',
            message: email,
        }
    ])


    // .then will run the function after inquirer and will have its data as its paramater. 
      .then((data) => {
    
        fs.writeFile('README.md', 
        
        `# ${data.title}

## Description

${data.license}

### Motivation

${data.motivation}

### Build

${data.build}

### Solve

${data.solve}

### Learn

${data.learn}

## Table of Contents:

[1. Installation](README.md/Installation/)

[2. Purpose](README.md/Purpose/)

[3. License](README.md/License/)

[4. Contribution](README.md/Contribution/)

[5. Tests](README.md/Tests/)

[6. Questions](README.md/Questions)
        
## Installation:

${data.installation}

## Usage:

${data.usage}

## License:


${data.license}

## Contribution:

${data.contribution}

## Tests:

${data.tests}

## Questions:

The source code of this project can be found on my Github repository at www.github.com/${data.github2}. Feel free to contact 
me any time regarding questions or recomendations. My email is ${data.email2}. Thank you for taking the time to review and use my app. 

        `, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
  

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();






// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

// [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)