// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  else if (license === 'MIT License') {
    return '[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)';
  } else if (license === 'GNU GPLv3') {
    return '[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  else if (license === 'MIT License') {
    return 'https://www.mit.edu/~amini/LICENSE.md';
  } else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/lgpl-3.0.html';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';
  else if (license === 'MIT License') {
    return 'This project is covered under the MIT License. For more information, please click the link below.';
  } else if (license === 'GNU GPLv3') {
    return 'This project is covered under the GNU GPLv3 License. For more information, please click the link below.';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //first evaluate license
  let license = data.license;
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  let licenseSection = renderLicenseSection(license);

  //return md string
  return `# ${data.title}

  ${licenseBadge}

  ${data.description}

  ---

  ## Table of Contents
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [Contributing](#contributing)
  
  - [Tests](#tests)
  
  - [License](#license)
  
  - [Questions](#questions)
  
  ---
  
  ## Installation

  ${data.install}

  ---
  
  ## Usage

  ${data.usage}

  ---
  
  ## Contributing

  ${data.contribution}

  ---
  
  ## Tests

  ${data.test}

  ---
  
  ## License

  ${licenseSection}

  ${licenseLink}

  ---
  
  ## Questions
  
  Please reach out with any questions!
  
  Github: https://github.com/${data.username}

  Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
