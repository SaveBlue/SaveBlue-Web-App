const mongoose = require('mongoose');
const User = mongoose.model('User');

// Find a user with an id
exports.findByID = (req, res) => {
    User.findById({_id: req.params.id})
        .then( user => {
            if(!user) {
                return res.status(404).json({
                    message:"No user with selected ID!"
                });
            }
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "An error occurred while fetching user!"
            });
        });
};

// Update user's data by the id in the request
exports.update = (req, res) => {

};

// Delete user's account with the specified id in the request
exports.delete = (req, res) => {
    User.deleteOne({_id: req.params.id})
        .then(user => {
            if (user.deletedCount === 0) {
                res.status(404).send({
                    message: `No user with selected ID!`
                });
            } else {
                res.send({
                    message: "User deleted!"
                });
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "An error occurred while deleting user!"
            });
        });
};
