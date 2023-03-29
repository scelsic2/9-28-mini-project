const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML.js")

const htmlPrompts = [
    {name: "yourName",
    message: "Enter your name."},
    {name: "location",
    message: "Enter your city and state."},
    {name: "bio",
    message: "Enter a brief bio."},
    {name: "linkedin",
    message: "Enter your LinkedIn address"},
    {name: "git",
    message: "Enter your Github address"}
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log("Your HTML file has been generated.")

    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(htmlPrompts)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("index.html", generateHTML(userInput));
    });
};

// Function call to initialize app
init();