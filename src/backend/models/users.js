const mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;

const budget = new Schema({
    category: {type: String, required: true},
    // category: { type: String, enum: ['category1', 'category2', 'category3'], required: true },
    budgetAmount: {type: Number, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true,}
});

const goal = new Schema({
    name: {type: String, required: true},
    description: String,
    targetAmount: {type: Number, required: true},
    currentAmount: {type: Number, default: 0},
    complete: {type: Boolean, default: false},
});

const expense = new Schema({
    name: {type: String, required: true},
    description: String,
    // category: { type: String, enum: ['category1', 'category2', 'category3'], required: true },
    date: {type: Date, default: Date.now},
    amount: {type: Number, required: true}
});

const income = new Schema({
    name: {type: String, required: true},
    description: String,
    // category: { type: String, enum: ['category1', 'category2', 'category3'], required: true },
    date: {type: Date, default: Date.now},
    amount: {type: Number, required: true}
});

const account = new Schema({
    name: {type: String, required: true},
    currentBalance: {type: Number, required: true},
    budgets: [budget],
    goals: [goal],
    expenses: [expense],
    incomes: [income],
    startOfMonth: {type: Number, required: true}

});


const user = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true},
    salt: {type: String, required: true},
    accounts: {type: [account], required: true},
});

// Create salt and hash password
user.methods.hashPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hashedPassword = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
};

// Hash received password and compare it
user.methods.checkPassword = function(password) {
    let hashedPassword = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
        .toString('hex');
    return this.hashedPassword === hashedPassword;
};

user.methods.generateJWT = function() {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    return jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
    });
};

mongoose.model('User', user);
