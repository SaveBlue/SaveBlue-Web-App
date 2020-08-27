const mongoose = require('mongoose');
const User = mongoose.model('User');

// Find all accounts of user with selected id
exports.findAllAccountsByUserID = (req, res) => {
    User.findById( req.params.uid, 'accounts.name')
        .then(accounts => {
            if (!accounts) {
                return res.status(404).json({
                    message: "No user with selected ID!"
                });
            }
            res.status(200).json(accounts);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "An error occurred while fetching user!"
            });
        });
};

//{'accounts': {$elemMatch: {_id: req.params.id}}}
//accounts._id accounts.name accounts.currentBalance accounts.startOfMonth
// Find account with selected id
exports.findAnAccountByID = (req, res) => {
    User.findOne({'accounts._id': req.params.id}, {'accounts.$': 1})
        .then(account => {

            if (!account) {
                return res.status(404).json({
                    message: "No account with selected ID!"
                });
            }
            res.status(200).json(account);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "An error occurred while fetching account!"
            });
        })

};



// Add a new account to an user with selected id
exports.createAccount = (req, res) => {

    let newAccount = {
        name: req.body.name,
        currentBalance: 0,
        budgets: [],
        goals: [],
        expenses: [],
        incomes: [],
        startOfMonth: 1
    };

    //finds user and appends newAccount to the accounts array, then returns the new list of all account names
    User.findByIdAndUpdate(req.params.uid,{$push: {accounts: newAccount}},{new:true, select:'accounts.name'} )
        .then(accounts => {

            if (!accounts) {
                return res.status(404).json({
                    message: "No user with selected ID!"
                });
            }
            res.status(200).json(accounts);

        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "An error occurred while adding a new account!"
            });
        });
};



