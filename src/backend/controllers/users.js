const mongoose = require('mongoose');
//const passport = require('passport');
const User = mongoose.model('User');


// Register a new user
exports.register = (req, res) => {

    //Validate request
    if (!req.body.username || !req.body.password ||  !req.body.email) {
        return res.status(400).json({message: "All data must be present"});
    } else if (!(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(req.body.email))) {
        return res.status(400).json({message: "Email address is not valid!"});
    }

    // Create a new user
    const newUser = new User({
        username: req.body.username,
        hashedPassword: req.body.password,
        email: req.body.email,
        accounts: [],
        salt: "test"
    });

    // Save new User in the database
    newUser
        .save(newUser)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating new User!"
            });
        });
};

// Login to user account
exports.login = (req, res) => {

};

// Find a user with an id
exports.findByID = (req, res) => {
    User.find({_id: req.params.id})
        .exec((error, user) => {
            if(!user) {
                return res.status(404).json({
                    message:"No user with this ID!"
                });
            } else if (error) {
                return res.status(500).json(error);
            }
            res.status(200).json(user);
        })
};

// Update user's data by the id in the request
exports.update = (req, res) => {

};

// Delete user's account with the specified id in the request
exports.delete = (req, res) => {

};
