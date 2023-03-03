const inquirer = require('inquirer');
const generateSVG = require('./utils/generateSVG')

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
        choices: ['Triangle', 'Square', 'Circle'],
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
        generateSVG(data)
    })