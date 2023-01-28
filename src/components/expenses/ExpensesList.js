import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props =>{
    if(props.items.length === 0)
        return <p>No expenses found.</p>

    return <ul className='expenses-list'>{props.items
        .map(
            exp => (
                <ExpenseItem 
                    key={exp.id}
                    title={exp.title} 
                    amount={exp.amount}  
                    date={exp.date}
                ></ExpenseItem>
            )
        )
    }</ul>
}

export default ExpensesList;