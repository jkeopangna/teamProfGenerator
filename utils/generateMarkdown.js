// const index = require('../index')

// function to generate markdown for README
function generateMarkdown(data) {
  return ` # ${data.title}

  ---

  ## Description

  ${data.description}

  ## Goals
  1. Building off of Node CLI, a HTML page is generated displaying a team profile with respective profile information
  2. Using dependecies such as inquirer and jest to run and provide tests to ensure the application executes correctly
  3. Prompt the user with questions that build each profile and adds team members
  4. Create classes for each member that inherit from one parent class of employee
  5. A screenshot and link are provided to preview the application

  ## Technology Used

  * Node JS
  * Jest
  * Inquirer
  * Javascript

  ## Table of Contents

  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [Contributions](#contributions)<br>
  [Description](#description)<br>

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## Testing

  ${data.tests}

  ## License
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/MIT)<br>
  For more information use the link provided.

  ## Contact For Questions

  Github: [${data.github}](https://github.com/jkeopangna/readMeGenerator)<br>
  Email: [${data.email}](https://gmail.com)`

 
}

module.exports = generateMarkdown;
