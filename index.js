const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'Enter text for your logo(Up to 3 characters)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'What color do you want the text to be(Enter keyword or hex value',
        name: 'textColor',
    },
    {
        type: 'list',
        message: 'What shape do you want your logo to be',
        choices: ['triangle', 'square', 'circle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be(Enter keyword or hex value',
        name: 'shapeColor'
    }
]

inquirer
    .prompt(questions).then((data) => {
        console.log(data)
    })