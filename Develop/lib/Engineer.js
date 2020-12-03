// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require('inquirer')

inquirer.prompt ([
    {
        type: 'input',
        message: 'Please enter your Github username:',
        name: 'github'
    }
])