import React from "react";
import './newExpense.css'
import NewExpForm from "./NewExpForm";
 
const NewExpense = (props)=>{
            //ye function banaye aur parameter me data NewExpForm se bheje
    const savedExpenseData = (dataFromExpForm) =>{ 
        const ExpenseDatas = {
            ...dataFromExpForm,         //previous data
            id : Math.random().toString()  //id banaye 
        }

        props.onAddExpenseData(ExpenseDatas);
        //App.js se onAddExpenseDAta ko props ke through call kiye and argument pass kiye 
        console.log(ExpenseDatas);
    }
   

    return(
        <div className="new_expense">
            <NewExpForm onSaveExpData = {savedExpenseData} />
        </div>
    )
}     //  line 12 jisko onSaveExpData me save karke props ki trah bheje newExpForm me
export default NewExpense;