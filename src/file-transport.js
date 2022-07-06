import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: 'application.log',
        }),
    ],
});

logger.error('this is logger error');
logger.warn('this is logger warn');
logger.info('this is logger info');
