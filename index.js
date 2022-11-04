const { buildFailureTestResult  }= require('@jest/test-result');
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const createHtml= require('./src/createhtml');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArray =[];


const addManager = () =>{
    return inquirer 
    .prompt([
        {
         type: 'input',
         name:'name',
         message:`What is the team manager's name?`
        },
        {
         type:'number',
         name:'id',
         message:'enter the ID number'
        },
        {
         type:'input',
         name:'email',
         message:'Please enter the email'
        },
        {
         type:'number',
         name:'officeNumber',
         message:'enter the office number'
        }
    ])
    .then((answers)=>{
        console.log(`Team manager ${answers.name} added!`, );
        const manager = new Manager( answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager);
        nextPrompt();
    })

};
const addEngineer = () =>{
    return inquirer 
    .prompt([
        {
         type: 'input',
         name:'name',
         message:`What is the engineer's name?`
        },
        {
         type:'number',
         name:'id',
         message:'enter the ID number'
        },
        {
         type:'input',
         name:'email',
         message:'Please enter the email'
        },
        {
         type:'input',
         name:'github',
         message:'please enter the Github username'
        }
    ])
    .then((answers)=>{
        console.log(`Engineer ${answers.name} added!` );
        const engineer = new Engineer( answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineer);
        nextPrompt();
    })

};

const addIntern = () =>{
    return inquirer 
    .prompt([
        {
         type: 'input',
         name:'name',
         message:`What is the Intern's name?`
        },
        {
         type:'number',
         name:'id',
         message:'enter the ID number'
        },
        {
         type:'input',
         name:'email',
         message:'Please enter the email'
        },
        {
         type:'input',
         name:'school',
         message:'please enter the school name'
        }
    ])
    .then((answers)=>{
        console.log(`Intern ${answers.name} added!`);
        const intern = new Intern( answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern);
        nextPrompt();
    })

};

const nextPrompt = ()=>{
    inquirer.prompt([
        {
            type:'list',
            name:'choice',
            message:'Add more team members or finish',
            choices:['Add engineer','Add intern',new inquirer.Separator(), 'Finished']
        }
       
    ]).then(userChoice =>{
        switch(userChoice.choice){
            case 'Add engineer':
                  addEngineer();
                  break;
            case 'Add intern':
                  addIntern();
                  break;
            default:
                console.log(teamArray)
                buildTeam();

        }
    })
};

 const buildTeam =()=>{

    console.log('Team completed.')
    fs.writeFile('./dist/index.html', createHtml(teamArray), 'UTF-8', (err)=>
    err? console.err(err) : console.log('Success!'))
 }

 addManager();

