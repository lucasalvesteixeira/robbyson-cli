#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));

const HelpCommand = require('./commands/help.command.js');
const VersionCommand = require('./commands/version.command.js');
const InitCommand = require('./commands/init.command.js');

const commands = argv._;
const mainCommand = commands[0];

if (!mainCommand) {
    new HelpCommand();
    return;
}

switch(mainCommand) {
    case 'help':
        new HelpCommand();
        break;

    case 'version':
        new VersionCommand();
        break;

    case 'init':
        new InitCommand(commands);
        break;
  
    default:
        new HelpCommand();
        break;
}