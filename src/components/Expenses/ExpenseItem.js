import Card from '../UI/Card';
import React, { useState } from 'react';
import './expenseItem.css'
import ExpenseDate from '../Expenses/ExpenseDate';

function ExpenseItem(props){
    /*
    const [Title, setTitle] = useState(props.title)
        //[variable, function] = hooks (default or initial value)
    const [newTitle, setNewTitle] = useState("");
       
    let clickHandler = ()=> {
       setTitle(newTitle) //change the value of Title variable or set new value.
       setNewTitle("")  //input me value empety ho jayega jab button ko click krenge tab;
    }
   
    let changeHandler = (event)=>{
        setNewTitle(event.target.value)  //newtitle me ye value hai jo setTitle me pass kr diya jo Title me chla jayga;
       
    }
*/
    return <Card className='exp_container'>
           
       <ExpenseDate dat = {props.dat}/>
        <div className='exp_description'>
            <h2 className='exp_h2'>{props.title}</h2>
            <div className='exp_price'>${props.amount}</div>
        </div>

      {/* <input type={"text"} value={newTitle} onChange={changeHandler}></input>
        <button onClick={clickHandler}>click me</button> */}
        
    </Card>
}
export default ExpenseItem;

/* card component ke inside ye sab hai to isko react 
    <div className="card"></div>    aise replace krega ;
isse thik karme ke liye card component me "props.children"{line 9-13  isme chala jayega(Card component ke ander)}property ka use karnege &
 classname ke liye "props.className" ka(bcoz exp_container classname hai vo abhi card component ke sath hai & vo card className se replace ho gya hai Card component se )

input me value{newTitle} ke ander useState("hi") valye hai("hi") to usi ko update kar rha hai change krne nai derha hai;
change kren ke liye setNewTitle() ka use karenge to iska value newTitle me chla jayega uske liye changeHandler bnaye hai ;
 */
