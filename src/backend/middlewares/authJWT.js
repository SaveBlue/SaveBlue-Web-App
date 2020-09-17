const jwt = require("jsonwebtoken");
const config = require("../config/auth");

verifyTokenUser = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({message: "No token provided!"});
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({message: "Unauthorized!"});
        }

        if(req.params.id === decoded.id)
            next();
        else
            return res.status(401).send({message: "Unauthorized!"});
    });
};

const authJwt = {
    verifyTokenUser: verifyTokenUser
};
module.exports = authJwt;
