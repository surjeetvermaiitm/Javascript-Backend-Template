import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;

const customFormat = printf(( { level, message, timestamp, error } ) => {
    return `${timestamp} : ${level}: ${message}`;
});

export const Logger = createLogger({
    format: combine(
        timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        customFormat,
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: "combined.log"})
    ],
});

