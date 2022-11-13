// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
 
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
    ${data.description}
    ${data.licenseBadge}
    [See deployed version](${data.URL})
    
  ---

  ## About
    ${data.about}
  ---
  ## User Story
    
  ---
  ## Acceptance Criteria
    
  ---
  ## Installation:
    ${data.installation}

    To clone the repo:
    
        git clone ${data.clone}
    
  ---
  ## License
    License used for this project - ${data.license}
    
  
  ---
  ## Tests:
    ${data.test}
  ---
  ## Authors and Acknowledgments
    ${data.author}
  ---
  ## Contact Information:
  * GitHub Username: ${data.userName}
  * GitHub Email: ${data.userEmail}
    
  `;
  
}

module.exports = generateMarkdown;
