const ExpenseSchema = require("../moduls/expensemodel")

exports.addExpense =async(req,res)=>{
    const{title, amount, date, category, description}= req.body
    const expense = ExpenseSchema({
        title,
        amount,
        date,
        category,
        description
    })
    try {
        if(!title || !date || !category || !description)
        {
            return res.status(400).json({message: " All field no inculded in the Expense model"})
        }
        if(amount<=0 || !amount==='number')
        {
            return res.status(400).json({message:"Amount should be positive"})
        }
        await expense.save()
        res.json({message: "Expense added to the DB"})
    } catch (error) {
        res.status(500).json({message:"Server Error"})
        console.error(error);
    }
    //console.log(expense)

}
exports.getExpense = async(req,res) =>{
    try {
        const expense = await ExpenseSchema.find()
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message:" Server side Error"})
        console.error(error);
    }

}

exports.deleteExpense = async(req, res) =>{
    const {id} = req.params;
    console.log(req.params);
    ExpenseSchema.findByIdAndDelete(id)
    .then((expense)=>{
        res.status(200).json({message:"Expense deleted from the DB"})
    })
    .catch((err)=>{
        res.status(500).json({message:"Server Error"})
    })
}