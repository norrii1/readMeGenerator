function generateMarkdown(data) {
  return `
  # ${data.title}
  
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
## Description
🔍 ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
💾 ${data.installation}
## Usage
💻 ${data.usage}
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
<br />
This application is covered by ${data.license} license. 
## Contributing
👪 ${data.contributing}
## Tests
✏️ ${data.tests}
## Questions
✋ ${data.questions}

    `;

}

module.exports = generateMarkdown;



