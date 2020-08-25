const mongoose = require('mongoose');

let dbURI = 'mongodb://localhost/SaveBlue';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_CLOUD_URI;
}


mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}.`);
});

mongoose.connection.on('error', napaka => {
    console.log('Mongoose connection error: ', napaka);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose not connected.');
});

const pravilnaUstavitev = (sporocilo, povratniKlic) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose closed the connection via '${sporocilo}'.`);
        callback();
    });
};

// Nodemon restart
process.once('SIGUSR2', () => {
    safeExit('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// Exit application
process.on('SIGINT', () => {
    safeExit('Exit application', () => {
        process.exit(0);
    });
});

// Exit application Heroku
process.on('SIGTERM', () => {
    safeExit('Exit application Heroku', () => {
        process.exit(0);
    });
});

require('./users');
