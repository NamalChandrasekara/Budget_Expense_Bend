const IncomeSchema = require("../moduls/incomemodel")

exports.addIncome =async(req, res) => {
   // console.log(req.body);
    const {title, amount, date, category, description} = req.body

    const income = IncomeSchema({
        title,
        amount,
        date,
        category,
        description
        
    })
    try {
        if(!title || !date || !category || !description)
        {
            return res.status(400).json({message: "All field should be included"})
        }
        if(amount<=0 || !amount === 'number')
        {
            return res.status(400).json({message:"Amount should be a positive Number"})
        }
        await income.save()
        res.status(200).json({message:"Income added to the DB"})

    } catch (error) {
        res.status(500).json({message:"Server Error"})
        console.error(error);
        //console.log("There is an error");
    }
    console.log(income)
}

exports.getIncomes =async(req,res)=>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt : -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }

}
exports.deleteIncome = async(req,res)=>{
    const {id} =req.params;
    console.log(req.params);
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:'Income deleted from the DB'})
        })
        .catch((err)=>{
            res.status(500).json({message:"server error"})
        })
}