const inquirer = require("inquirer");
const fs = require("fs");

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
    name: "istallation",
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
  console.log(readme);
}

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
${title}
${description}
${installation}
${usage}
${contribution}
[${email}](mailto:${email})
[${github}](https://github.com/${github})  
${license}
`;
  return readme;
}

init();