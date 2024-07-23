// const { type } = require('os');
const path = require('path');
const LOG_ROOT_DIR =
  process.env.LOG_ROOT_DIR || path.join(__dirname, '../logs');

module.exports = {
  appenders: {
    ConsoleLogAppender: { type: 'console' },
    ApplicationLogAppender: {
      type: 'dateFile',
      filename: path.join(LOG_ROOT_DIR, './application.log'),
      pattern: '-yyyy-MM-dd',
      // daysToKeep: 7,非推奨
      numbackups: 7,
      keepFileExt: true,
    },
    AccessLogAppender: {
      type: 'dateFile',
      filename: path.join(LOG_ROOT_DIR, './access.log'),
      pattern: '-yyyy-MM-dd',
      // daysToKeep: 7,非推奨
      numbackups: 7,
    },
  },

  categories: {
    default: {
      appenders: ['ConsoleLogAppender'],
      level: 'ALL',
    },
    application: {
      appenders: ['ApplicationLogAppender', 'ConsoleLogAppender'],
      level: 'INFO',
    },
    access: {
      appenders: ['AccessLogAppender', 'ConsoleLogAppender'],
      level: 'INFO',
    },
  },
};
