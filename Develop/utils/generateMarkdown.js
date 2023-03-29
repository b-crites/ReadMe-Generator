// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = data.license;
  let licenseChoice = '';

  if( licenseType === 'MIT'){
    licenseChoice = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }else if( licenseType === 'GPLv3'){
    licenseChoice = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  }else if(licenseType === 'Apache'){
    licenseChoice = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }else if(licenseType === 'BSD'){
    licenseChoice = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  }else{
    licenseChoice = ''
  }

  

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  

  ## Table of contents
  -[Project Description](#description)
  -[Usage](#usage)
  -[Contributions](#contributions)
  -[Installation](#installation)
  -[Questions](#questions)
  -[License](#license)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contributing
  ${data.contributing}
  
  
  ## Questions
  
  
  If you have any questions contact me on [Github] at (https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
