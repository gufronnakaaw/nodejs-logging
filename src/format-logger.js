import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    // format: winston.format.json(),
    // format: winston.format.logstash(),
    // format: winston.format.simple(),
    format: winston.format.printf((log) => {
        return `${new Date()} : ${log.level} : ${log.message}`;
    }),
    transports: [new winston.transports.Console({})],
});

logger.info('hello format');
