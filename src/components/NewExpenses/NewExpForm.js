import React, { useState } from "react";
import './newExpense.css';

function NewExpForm(props){

    const [enteredtitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const changeTitle = (e)=>{
        setEnteredTitle(e.target.value)
    };

    const changeAmount = (e)=>{
        setEnteredAmount(e.target.value)
    };

    const changeDate = (e)=>{
        setEnteredDate(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredtitle,
            amount: enteredAmount,
            date: new Date(enteredDate)  //enteredDate ek string me hai usko object me convert krne ke liye "new Date()" ka use kiye;
        }     //yha ab data ko child se parent me bhejan hai newExpenseForm => NewExpense => App.js me;
        
        props.onSaveExpData(expenseData); //NewExpense se onSaveExpData ko call kiye (prop ki help se ) and "expenseData" ko argument ki trah bheje;
        console.log(expenseData)
       
        setEnteredTitle("")  //input box ko empety krne ke liye - input field me value{entereddata} pass kiy eaur yha empty string;
        setEnteredAmount("")
        setEnteredDate("")

    }
 
    return(
        <form onSubmit={submitHandler}>
            <div className="newExp_controls">
               <div className="newExp_control">
                    <label>Title</label>
                    <input type={"text"} onChange={changeTitle} value={enteredtitle} placeholder={"where you spend your money"} />
               </div>
               <div className="newExp_control">
                    <label>Amount</label>
                    <input type={"number"} onChange={changeAmount} value={enteredAmount} placeholder={"$000"} min={"0.01"} step={"0.01"} />
               </div>
               <div className="newExp_control">
                    <label>Date</label>
                    <input type={"date"} onChange={changeDate} value={enteredDate} />
               </div>

            </div>
            <div className="newExp_btn">
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}
export default NewExpForm;