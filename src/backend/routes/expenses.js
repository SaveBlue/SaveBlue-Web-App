module.exports = expensesRouter => {

    expensesRouter.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const expensesController = require("../controllers/expenses");
    const router = require("express").Router();

    // Get all expenses of account by user ID
    // TODO: limit the number of returned incomes
    router.get("/find/:aid",expensesController.findAllExpensesByAccountID);

    // Get an expense by ID
    router.get("/:id",expensesController.findExpenseByID);

    // Create an expense
    router.post("/",expensesController.create);

    // Delete an expense by ID
    router.delete("/:id",expensesController.delete);

    // Update an expense by ID
    router.put("/:id",expensesController.update);

    expensesRouter.use('/api/expenses', router);
};
