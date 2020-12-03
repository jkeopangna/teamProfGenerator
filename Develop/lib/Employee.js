// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');

inquirer.prompt ([
    {
        type: 'input',
        message: 'Please enter your name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter your ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter an email:',
        name: 'email'
    },
])

.then((data) => {
function getName() {
return data.name;
}
getName();
});

exports.Employee = Employee;