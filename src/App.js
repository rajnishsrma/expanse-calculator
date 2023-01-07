import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import './index.css';

const App = ()=>{
    let Dummy_Expenses = [
        {
            id: "e1",
            title : "school fee",
            amount: 250,
            date: new Date(2023,5,12)
        },
        {
            id: "e2",
            title : "collage fee",
            amount: 350,
            date: new Date(2023,6,10)
        },
        {
            id: "e3",
            title : "food",
            amount: 400,
            date: new Date(2023,7,26)
        },
        {
            id: "e4",
            title : " rent",
            amount: 550,
            date: new Date(2023,9,15)
        }
    ];


    const [expenses, setExpenses] = useState(Dummy_Expenses);


    const addExpenseData = (expense)=>{
        const updateExpense = [expense, ...expenses]
        setExpenses(updateExpense); //[new data title+ amount + date ...old data 4thok]
      
        
    };
    
    return (
        <div>
            <NewExpense onAddExpenseData = {addExpenseData} />
           <Expenses item = {expenses}/>

        </div>
    );
    
}
export default App;