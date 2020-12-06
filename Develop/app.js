const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];
const ids = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createTeam() {
    function chooseTeam() {
        inquirer.prompt ([
            {
                type: 'list',
                message: 'Do you want to add a team member?',
                choices: ['I do not want to add any','Engineer', 'Intern'],
                name: 'team'
            }
        ])
        .then(
            choice => {
                switch (choice.team){
                    case 'Engineer': addEngineer();
                    break;
                    case 'Intern': addIntern();
                    break;
                    // default writeToFile();
                }
            
            }
        )
    }
    function addManager() {
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
                {
                type: 'input',
                message: 'Please enter your office number:',
                name: 'office'
            },

        ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        ids.push(data.id);
        chooseTeam()
        });
    }
    addManager()
}
createTeam()


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


