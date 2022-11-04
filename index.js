const inquirer = require('inquirer');
// const fs = require('fs');


inquirer
    .prompt([
    {
      type:'input',
      message: 'What is the title of your project ?',
      name: 'title',
    }
    ])
    .then((response) => {
        console.log(response)
    });