import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.File({
            handleExceptions: true,
            filename: 'exceptions.log',
        }),
    ],
});

// error
// because function hello is not defined
hello();
