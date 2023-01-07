import '../UI/Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
export default Card;

/* props.children se sara content aa jata hai aur inner children ka css bhi but 
classNme exp_container ka nahi bcoz vo Card component me aa gya hi 
 
line 5 me do classname ho jayega "className="card exp_container""*/ 