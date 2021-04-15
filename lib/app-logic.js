const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const generatePage = require("../src/page-template");
const writeFile = require("../utils/generate-site");
const inquirer = require("inquirer");

class App {
    constructor() {
        // create an array to add all employees 
        this.employees = [];
        // prompts for Manager information
        this.managerPrompt = [
            {
                type: "input",
                message: "Please enter the manager's name: ",
                name: "name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the manager's employee id: ",
                name: "id",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's employee id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the manager's email: ",
                name: "email",
                validate: emailInput => {
                    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
                    if ((valid)) {
                        return true;
                    } else {
                        console.log("Please enter a valid email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message: "Please enter the manager's office phone number: ",
                name: "officeNumber",
                validate: numberInput => {
                    if (numberInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                }
            }
        ];
        // prompts for other employees information
        this.othersPrompt = [
            {
                type: "list",
                message: "Lets add other members of your team. Select the next employee's role or select 'exit' to create the team profile page:",
                name: "role",
                choices: ["Engineer", "Intern", "Exit"],
            },
            {
                type: "input",
                message: ({role}) => `Creating a new ${role}!. Please enter the ${role}'s name?`,
                name: "name",
                when: ({role}) => role != "Exit",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({role}) => `What is the ${role}'s employee id?`,
                name: "id",
                when: ({role}) => role != "Exit",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter an employee id.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({role}) =>  `What is the ${role}'s email?`,
                name: "email",
                when: (data) => data.role != "Exit",
                validate: emailInput => {
                    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
                    if (valid) {
                        return true;
                    } else {
                        console.log("Please enter an email.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                message:  ({role}) => `What is the ${role}'s github username?`,
                name: "github",
                when: ({role}) => role === "Engineer",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Please enter a github username.');
                        return false;
                    }
                }

            },
            {
                type: "input",
                message:  ({role}) => `What is the ${role}'s school?`,
                name: "school",
                when: ({role}) => role === "Intern",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter the Intern's school!");
                        return false;
                    }
                }
            }
        ];
    }

    // manager information prompt function
    manager() {
        // promp user for manager's information
        inquirer.prompt(this.managerPrompt).then(data => {
        // add manager information to employees array and call others function
            this.employees.push(new Manager(data.name, data.id, data.email, data.officeNumber));
        return this.others();
    });
    }
    
    others() {
        inquirer.prompt(this.othersPrompt).then(data => {
            switch (data.role) {
                case "Exit":
                    // call generate page with data and write html file with it
                    return writeFile(generatePage(this.employees));
                case "Engineer":
                    this.employees.push(new Engineer(data.name, data.id, data.email, data.github));
                    return this.others();
                case "Intern":
                    this.employees.push(new Intern(data.name, data.id, data.email, data.school));
                    return this.others();
            }
        })      
        .catch(err => {
            console.log(err);
        });
    }

    // Start applcation function
    start() {
        // Welcome print goes in here
        console.log(`
        ============================================
        Welcome to Team Profile Generator Aplication
        ============================================
        `);
        // call manager function
        this.manager();   
    }
}

module.exports = App;