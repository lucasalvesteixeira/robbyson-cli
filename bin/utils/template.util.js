const fs = require('fs');

class template {
  static hasPackage() {
    return fs.existsSync(`${process.cwd()}/package.json`);
  }

  static hasFolder(folderName) {
    if (folderName.charAt(0) === '/') {
      return fs.existsSync(`${folderName}`);
    } else {
      return fs.existsSync(`${process.cwd()}/${folderName}`);
    }
  }

  static hasFile(fileName) {
    return fs.existsSync(fileName);
  }

  static createFolder(folderName) {
    if (!template.hasFolder(folderName)) {
      fs.mkdirSync(folderName);
    }
  }
}

module.exports = template;
