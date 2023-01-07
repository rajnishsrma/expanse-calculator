import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import './Expenses.css';

function Expenses(props){

    return <div>
         <div className="headin">expenses calculator</div>
    <Card className="expenses">
        
   {
   props.item.map(exp => (
          <ExpenseItem dat = {exp.date} 
            title= {exp.title}
            amount = {exp.amount} />)
            )
     } 

    {/* { props.item.map(function(exp){
     return(
           <ExpenseItem dat = {exp.date} 
           title= {exp.title}
           amount = {exp.amount} />
     )
     })} */}
{/* line 11 -17, exp parameter me App.js se expenses obj ka data aya aur map function se usko access kiye  */}


       
    </Card>
    </div>
}
export default Expenses;