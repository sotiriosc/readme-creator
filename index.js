// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", 
    "What was your motivation?", 
    "Why did you build this project?", 
    "What problem does it solve?",
    "What did you learn?",

];

const [one, two, three, four, five] = questions

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
    ])

    // .then((data) => {
    
    //     fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
    //       err ? console.log(err) : console.log('Success!')
    //     );
    //   });

      .then((data) => {
    
        fs.writeFile('README.md', `# ${data.title}
        
        ## Motivation:

        ${data.motivation}

        ## The Purpose of This Project:

        ${data.build} ${data.solve} ${data.learn}
        `, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

