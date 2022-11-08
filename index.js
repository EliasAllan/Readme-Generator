const inquirer = require('inquirer');
const {generateMarkdown, renderLicenseBadge} = require('./READMEgen');
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
      {
        type:'list',
        message:'What type of License do you want to add ?',
        name:'license',
        choices: ['Apache', 'Boost', 'IBM', 'Eclipse', 'MIT', 'none'],
      },
      {
        type:'input',
        message: 'What is your Github username ?',
        name: 'github',
      },
      {
        type:'input',
        message: 'What is your E-mail ?',
        name: 'email',
      },
      
    ])
    .then((response) => {
      writeMdFile(renderLicenseBadge(response) + generateMarkdown(response))
        // console.log(generateMarkdown(response))
    });

    function writeMdFile(data){

      return fs.writeFile("README.md", data, (err) =>{
        if(err) return console.error(err);
        console.log("README created !")
      });
    }