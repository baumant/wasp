#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

//extract controller functions from logic.js
const { newProject } = require('./logic');

// Questions to present to users
const questions = [
  {
    type : 'input',
    name : 'name',
    message : 'Enter the name of your theme ...'
  },
  {
    type : 'input',
    name : 'repo',
    message : 'Enter the url of your repo ...'
  }
];

program
  .version('1.0.0')
  .description('Wordpress Awesome Starter Package');

program
  .command('newproject')
  .alias('n')
  .description('start a new wordpress project')
  .action(() => {
    prompt(questions).then(answers =>
      newProject(answers));
  });

program.parse(process.argv);
