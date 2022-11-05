const inquirer = require('inquirer');
const READMEgen = require('./READMEgen');
const fs = require('fs')

function writeMdFile(data){

  return fs.writeFile("README.md", data, (err) =>{
    if(err) return console.error(err);
    console.log("success!")
  });
}

writeMdFile(READMEgen.renderTitle("READMEGENERATOR"))
// console.log(READMEgen.renderTitle('README generator'))


inquirer
    .prompt([
    {
      type:'input',
      message: 'What is the title of your project ?',
      name: 'title',
    },
//     {
//       type:'input',
//       message: '',
//       name: 'Description',
//     },
//     {
//       type:'input',
//       message: '',
//       name: 'installation instructions',
//     },
//     {
//         type:'input',
//         message: '',
//         name: 'usage information',
//       },
//     {
//         type:'input',
//         message: '',
//         name: 'contribution guidelines',
//       },
//     {
//         type:'input',
//         message: '',
//         name: 'test instructions',
//       },
    ])
    .then((response) => {
        console.log(response)
    });