module.exports = usersRouter => {

    usersRouter.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const usersController = require("../controllers/users");
    const router = require("express").Router();

    // Register new user
    router.post("/register",usersController.register);


    // Find user by ID
    router.get("/:id",usersController.findByID);

    usersRouter.use('/api/users', router);
};
