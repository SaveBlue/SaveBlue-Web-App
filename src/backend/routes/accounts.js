module.exports = accountsRouter => {

    accountsRouter.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const accountsController = require("../controllers/accounts");
    const router = require("express").Router();

    // Find all accounts of user by ID
    router.get("/:uid",accountsController.findAllByID);

    // Delete account by ID
    router.delete("/:id",accountsController.delete);

    // Update account by id
    router.put("/update/:id",accountsController.update);

    accountsRouter.use('/api/accounts', router);
};
