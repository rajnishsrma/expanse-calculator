import React from "react";

const ExpenseDate = (props)=>{
    let month = props.dat.toLocaleString('en-US', {month: 'short'});
    let day = props.dat.toLocaleString('en-US', {day: '2-digit'});
    let year = props.dat.getFullYear();

    return  <div className=' exp_date'>
                <div className="month">{month}</div>
                <div className="day">{day}</div>
                <div className="year">{year}</div>
            </div> ;
}
export default ExpenseDate;
