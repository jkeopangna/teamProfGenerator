// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require('inquirer');
const Employee = require('Employee');


inquirer.prompt ([
    {
    type: 'input',
    message: 'Please enter your office number:',
    name: 'office'
    }
])