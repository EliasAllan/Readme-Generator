const inquirer = require('inquirer');
// const fs = require('fs');


inquirer
    .prompt([
    {
      type:'input',
      message: 'What is the title of your project ?',
      name: 'title',
    },
    {
      type:'input',
      message: '',
      name: 'Description',
    },
    {
      type:'input',
      message: '',
      name: 'installation instructions',
    },
    {
        type:'input',
        message: '',
        name: 'usage information',
      },
    {
        type:'input',
        message: '',
        name: 'contribution guidelines',
      },
    {
        type:'input',
        message: '',
        name: 'test instructions',
      },
    ])
    .then((response) => {
        console.log(response)
    });