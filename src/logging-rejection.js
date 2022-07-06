import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.File({
            handleExceptions: true,
            handleRejections: true,
            filename: 'rejections.log',
        }),
    ],
});

// error
// because promise reject was not handled
testAsync();

async function testAsync() {
    return Promise.reject('ups!');
}
