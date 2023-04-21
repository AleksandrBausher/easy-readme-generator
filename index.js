//importing modules
const inquirer = require("inquirer");
const fs = require("fs");

//questions array
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of your ptoject: ",
  },
  {
    type: "input",
    name: "description",
    message: "Description of your ptoject: ",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions: ",
  },

  {
    type: "input",
    name: "usage",
    message: "Usage: ",
  },
  {
    type: "input",
    name: "contri",
    message: "Contribution Guidelines: ",
  },
  {
    type: "input",
    name: "github",
    message: "Your GitHub Username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Email Address: ",
  },
  {
    type: "list",
    message: "License:",
    name: "license",
    choices: [
      "MIT",
      "Mozilla Public License 2.0",
      "Open Software License 3.0",
      "Microsoft Public License",
    ],
  },
];

//init async function
async function init() {
  var userAnswers = await inquirer.prompt(questions);
  var readme = createReadme(
    userAnswers.title,
    userAnswers.description,
    userAnswers.installation,
    userAnswers.usage,
    userAnswers.contri,
    userAnswers.email,
    userAnswers.github,
    userAnswers.license
  );
//writing in the readme.md file
fs.writeFile("generatedReadme.md", readme, (err) =>
      err ? console.log(err) : console.log("Successful")
);
}

//creating string to add to the readme.md file
function createReadme(
  title,
  description,
  installation,
  usage,
  contribution,
  email,
  github,
  license
) {
  var readme = `
# Title ![badge](https://img.shields.io/badge/license-${license.replace(/\s/g, '--') }-blue)
${title}

# Description
${description}

# Table of contents \n\n
* [Instructions](#instructions)
* [Usage](#usage)
* [Contribution](#contribution)
* [Questions](#questions)
* [License](#license)\n\n
   
# Instructions 
${installation}
# Usage
${usage}
# Contribution
${contribution}
# Questions

My Email:<br> 
[${email}](mailto:${email})

My Github:<br>
[${github}](https://github.com/${github})

# License
${license}
`;
  return readme;
}

init();