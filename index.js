const inquirer = require('inquirer');
const {generateMarkdown} = require('./READMEgen');
const fs = require('fs')


inquirer
    .prompt([
    {
      type:'input',
      message: 'What is the title of your project ?',
      name: 'title',
    },
    {
      type:'input',
      message: 'Description',
      name: 'Description',
    },
    {
      type:'input',
      message: 'Installation instructions',
      name: 'installationinstructions',
    },
    {
        type:'input',
        message: 'Usage information',
        name: 'usageinformation',
      },
    {
        type:'input',
        message: 'Contribution guidelines',
        name: 'contributionguidelines',
      },
    {
        type:'input',
        message: 'Test instructions',
        name: 'testinstructions',
      },
    ])
    .then((response) => {
      writeMdFile(generateMarkdown(response))
        console.log(generateMarkdown(response))
    });

    function writeMdFile(data){

      return fs.writeFile("README.md", data, (err) =>{
        if(err) return console.error(err);
        console.log("success!")
      });
    }