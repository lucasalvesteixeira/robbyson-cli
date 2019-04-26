class log {
    static write(message, options) {
      if (!message) {
        return;
      }
  
      options = options || {};
      options.padding = options.padding || 0;
  
      for(let i = 0; i < options.padding; i++) {
        console.log('');
      }

      if (options.type) {
        console.log(log.type[options.type] + message + log.type.reset);
      } else {
        console.log(message);
      }
  
      for(let i = 0; i < options.padding; i++) {
        console.log('');
      }
    }
  
    static get type() {
      return {
        error: '\x1b[31m',
        info: '\x1b[36m',
        reset: '\x1b[0m'
      }
    }
  }
  
  module.exports = log;