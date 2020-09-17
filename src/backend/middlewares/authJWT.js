const jwt = require("jsonwebtoken");
const config = require("../config/auth");
const mongoose = require('mongoose');
const User = mongoose.model('User');

verifyTokenUser = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({message: "No token provided!"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: "Unauthorized!"});
        }

        // verify that sent user id is the same as tokens
        if(req.params.id === decoded.id || req.params.uid === decoded.id)
            next();
        else
            return res.status(401).send({message: "Unauthorized!"});
    });
};

verifyTokenAccount = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({message: "No token provided!"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: "Unauthorized!"});
        }

        // verification if account id belongs to the same user id provided in JWT token
        User.findOne({'accounts._id': req.params.id}, '_id')
            .then(userID => {

                if (!userID) {
                    return res.status(404).json({
                        message: "No account with selected ID!"
                    });
                }

                // verify that user id of requested account is the same as the one provided in JWT token
                if(userID._id.equals(decoded.id))
                    next();
                else
                    return res.status(401).send({message: "Unauthorized!"});

            })
            .catch(error => {
                res.status(500).send({
                    message: error.message || "An error occurred while fetching account!"
                });
            });
    });
};

const authJwt = {
    verifyTokenUser: verifyTokenUser,
    verifyTokenAccount: verifyTokenAccount
};
module.exports = authJwt;
