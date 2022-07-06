import winston from 'winston';

const logger = winston.createLogger({
    level: 'silly',
    transports: [new winston.transports.Console({})],
});

// without shorcut
// logger.log({ level: 'error', message: 'hello logger error' });
// logger.log({ level: 'warn', message: 'hello logger warn' });
// logger.log({ level: 'info', message: 'hello logger info' });
// logger.log({ level: 'http', message: 'hello logger http' });
// logger.log({ level: 'verbose', message: 'hello logger verbose' });
// logger.log({ level: 'debug', message: 'hello logger debug' });
// logger.log({ level: 'silly', message: 'hello logger silly' });

// with shortcut
logger.error('hello logger error');
logger.warn('hello logger warn');
logger.info('hello logger info');
logger.http('hello logger http');
logger.verbose('hello logger verbose');
logger.debug('hello logger debug');
logger.silly('hello logger silly');
