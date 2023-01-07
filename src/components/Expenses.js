import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) =>{
    return (        
        <div className="expenses">
            <ExpenseItem 
                title={props.data[0].title} 
                amount={props.data[0].amount}  
                date={props.data[0].date}
            ></ExpenseItem>
            <ExpenseItem 
                title={props.data[1].title} 
                amount={props.data[1].amount}  
                date={props.data[1].date}
            ></ExpenseItem>
            <ExpenseItem 
                title={props.data[2].title} 
                amount={props.data[2].amount}  
                date={props.data[2].date}
            ></ExpenseItem>
            <ExpenseItem 
                title={props.data[3].title} 
                amount={props.data[3].amount}  
                date={props.data[3].date}
            ></ExpenseItem>
        </div>
    );
}

export default Expenses;