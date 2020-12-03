// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require('inquirer');

inquirer.prompt ([
    {
        type: 'input',
        message: 'What school are you attending:',
        name: 'school'
    }
])