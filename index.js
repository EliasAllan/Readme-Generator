const inquirer = require('inquirer');
// const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
    {
      type: 'confirm',
      message: "Do you like Tacos?",
      name: 'likeTaco'
    },
    {
      type: 'checkbox',
      message: "What Star Trek languages do you know?",
      choices: ["Clingon", "Human", "Vulcan"],
      name: "sheldonParameter"
    }
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
// inquirer
//     .prompt([
//     {
//       type:'input',
//       message: 'What is the title of your project ?',
//       name: 'title',
//     }
//     ])
//     .then((response) => {
//         console.log(response)
//     });