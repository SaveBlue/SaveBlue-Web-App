module.exports = incomesRouter => {

    incomesRouter.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    const incomesController = require("../controllers/incomes");
    const router = require("express").Router();

    // Get all incomes of account by user ID
    // TODO: limit the number of returned incomes
    router.get("/find/:aid",incomesController.findAllIncomesByAccountID);

    // Get an income by ID
    router.get("/:id",incomesController.findIncomeByID);

    // Create income
    router.post("/",incomesController.create);

    // Delete income by ID
    router.delete("/:id",incomesController.delete);

    // Update income by ID
    router.put("/:id",incomesController.update);

    incomesRouter.use('/api/incomes', router);
};
