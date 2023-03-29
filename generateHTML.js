function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <header><h1>${data.yourName}</h1><header>
    <h2>${data.location}</h2>
    <p>${data.bio}</p>
    <ul>
        <li><a href="${data.linkedin}">LinkedIn</li>
        <li><a href="${data.git}">Github</li>
    </ul>
</body>
</html>
    `
}

// function generateMarkdown(data) {
//     return `# ${data.projectTitle}
//     ## Description
//     ${data.description}
  
//     ## Table of Contents
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [License](#license)
//     - [Contributing](#contributing)
//     - [Tests](#tests)
//     - [Questions](#questions)
   
//     ## Installation
//     ${data.installation}
  
//     ## Usage
//     ${data.usage}
  
//     ## License
//     ${data.license}
  
//     ## Contributing
//     ${data.contributing}
  
//     ## Tests
//     ${data.tests}
  
//     ## Questions
//     - Github:
//     [${data.github}](http://github.com/${data.github})
//     - Email:
//     [${data.email}](mailto:${data.email})`
//   ;
//   }
  
  module.exports = generateHTML;