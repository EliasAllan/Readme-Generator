// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license === 'Apache'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if(data.license === 'Boost'){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
  if(data.license === 'IBM'){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  }
  if(data.license === 'Eclipse'){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  }
  if(data.license === 'MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if(data.license === 'none'){
    return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === 'Apache'){
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if(data.license === 'Boost'){
    return "https://www.boost.org/LICENSE_1_0.txt"
  }
  if(data.license === 'IBM'){
    return "https://opensource.org/licenses/IPL-1.0"
  }
  if(data.license === 'Eclipse'){
    return "https://opensource.org/licenses/EPL-1.0"
  }
  if(data.license === 'MIT'){
    return "https://opensource.org/licenses/MIT"
  }
  if(data.license === 'none'){
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `

${renderLicenseLink(data)}

# ${data.title}

## Description 
${data.Description}

## Installation  
${data.installationinstructions}

## Technologies  
${data.technologies}

## Usage  
${data.usageinformation}

## Contributing 
${data.contributionguidelines}

## Tests
${data.testinstructions}

## License
This application is covered by the ${data.license} license

## Questions
https://github.com/${data.github}

or

E-mail me at: ${data.email}

## Table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
`
}



module.exports ={
    generateMarkdown,
    renderLicenseBadge
}