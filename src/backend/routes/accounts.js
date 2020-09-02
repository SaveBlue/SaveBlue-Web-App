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

    // Get all accounts of user by user ID
    router.get("/:uid",accountsController.findAllAccountsByUserID);

    // Get all data of specific account by account ID
    router.get("/find/:id",accountsController.findAccountByID);

    // Delete specific account by account ID
    router.delete("/delete/:id",accountsController.deleteAccountByID);

    // Update specific account's info by account ID
    router.put("/update/:id",accountsController.updateAccountByID);

    // Create account to user by user ID
    router.post("/:uid",accountsController.createAccount);

    accountsRouter.use('/api/accounts', router);
};
