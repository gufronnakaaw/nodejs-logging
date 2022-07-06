import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    // format: winston.format.logstash(),
    // format: winston.format.simple(),
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
});

logger.info('hello format');
