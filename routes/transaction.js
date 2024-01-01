const { addExpense, getExpense, deleteExpense } = require('../controllers/expence');
const {addIncome, getIncomes, deleteIncome} = require('../controllers/income');


const router = require('express').Router()

router.post('/add-Income', addIncome)
    .get('/get-Income',getIncomes)
    .delete('/delete-Income/:id',deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense/:id',deleteExpense)
module.exports = router