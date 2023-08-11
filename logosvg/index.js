const fs = require('fs');
const inquirer = require('inquirer');
const {generateSVG}= require('./lib/generateSVG');
const {generateShape}= require('./lib/generateShape');


const questions =[
  {
    type:'input',
    name:"logoName",
    message:'please enter 1-3 letters'
  },
  {
    type:'input',
    name:"textColor",
    message:'please enter text color'
  },
  {
    type:'input',
    name:"logoColor",
    message:'please enter a color keybord or hexadecimal number as the logs text color'
  },
  {
    type:'list',
    name:"logoShape",
    message:'Please choose logo shape',
    choices:['triangle','circle','square']
  }
]
      inquirer.prompt(questions)
        .then((data)=>{
          const svgPath ='./dist/logo.svg';
          const finalLogo = generateShape(data);
        
        fs.writeFile(svgPath,generateSVG(finalLogo),(err)=>{
          if(err){
            console.error(err)
          }else {
            console.log("Generated logo.svg")
          }
        })
        })
        .catch((err)=>console.error(err))
        