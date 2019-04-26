
class HelpCommand {
  constructor() {
    this.showCommands();
  }

  showCommands() {
    console.log(`
      Robbyson Available Commands:

        init     -  [name] - Create a new empty project
        version  -  Shows CLI current version
        help     -  Shows available options in CLI
  
      Robbyson CLI - Robbyson Data Improving People.
    `);
  }
}

module.exports = HelpCommand;