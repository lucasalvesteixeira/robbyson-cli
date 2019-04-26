const log = require('../utils/log.util');
const template = require('../utils/template.util');
const { spawnSync } = require( 'child_process');

class InitCommand {
  constructor(commands) {
    this.commands = commands;
    this.projectName = commands[1];

    if (!this.projectName) {
      log.write('The project must have a name. e.g. robbyson-cli init <name>', { type: 'error', padding: 2 });
      return;
    }

    if (template.hasPackage()) {
      log.write('Can\'t create a new project here.\nThis folder already has a package.json file.', { type: 'error', padding: 2 });
      return;
    }

    if (template.hasFolder(this.projectName)) {
      log.write(`Can't create the project.\nThe name "${this.projectName}" is already in use by another folder or file.`, { type: 'error', padding: 2 });
      return;
    }

    log.write(`Generating files...`, { type: 'info', padding: 1 });

    // Clone robbyson-skeleton and create folder with project name
    const clone = spawnSync('git', ['clone', '--depth=1', '--branch=master', 'https://github.com/lucasalvesteixeira/robbyson-service-skeleton.git', this.projectName]);

    // If there was any error while cloning repo, abort action
    if (clone.stderr.toString().includes('Error')) {
      log.write(`Error while cloning robbyson-skeleton. Try again later.`, { type: 'error', padding: 1 });
      console.log(clone.stderr.toString());
      console.log(clone.stdout.toString());
      return;
    }

    // Remove git garbage files from the new folder
    spawnSync('rm', ['-rf', `${this.projectName}/.git`]);

    log.write(`Project created. Instructions:\n\n
               cd ${this.projectName}\n
               configure the project by replacing the {{information}} tags with your service data\n
               read the file README and follow instructions`, { type: 'info', padding: 2 });
  }
}

module.exports = InitCommand;