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

    // Find user by ID
    router.get("/:id",usersController.findByID);

    // Delete user by ID
    router.delete("/:id",usersController.delete);

    // Update user by id
    router.put("/update/:id",usersController.update);

    usersRouter.use('/api/users', router);
};
