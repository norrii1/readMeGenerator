const generateMarkdown = require('./generateMarkdown.js')
const { prompt } = require('inquirer')
const util = require("util")
const fs  = require('fs')

 const questions = [ 
      
        {
          type: 'input',
          name: 'title',
          message: 'Title : '
    },
        {
          type: 'input',
          name: 'description',
          message: 'Description : '
    },
        {
          type: 'input',
          name: 'tableofContents',
          message: 'Table of Contents : '
    },
        {
          type: 'input',
          name: 'installation',
          message: 'Installation : '
    },
        {
          type: 'input',
          name: 'usage',
          message: 'Usage : '
    },
        {
          type: 'input',
          name: 'license',
          message: 'License : '
    },
        {
          type: 'input',
          name: 'contributing',
          message: 'Contributing : '
    },
        {
          type: 'input',
          name: 'tests',
          message: 'Tests : '
    },
        {
          type: 'input',
          name: 'questions',
          message: 'Questions : '
    }
      
    ];
function writeToFile(fileName, data) {
  
  fs.writeFile(fileName, data, (err) => {
      console.log(fileName)
      console.log(data)
      if(err){console.log(err)}
      console.log('readMe created !')
  })
  }
// function to initialize program
function init() {
 prompt(questions)
 .then(data =>{
    writeToFile('readMe.md', generateMarkdown(data));
    console.log(data)   
 })
}
// function call to initialize program
init();
