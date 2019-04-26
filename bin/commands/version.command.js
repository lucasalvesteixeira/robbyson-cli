const pkg = require('../../package.json');
const log = require('../utils/log.util');

class VersionCommand {
  constructor() {
    log.write(`Robbyson CLI: ${pkg.version}`, { padding: 2 });
  }
}

module.exports = VersionCommand;