import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';

const Expenses = (props) =>{
    const [selectedFilter,setFilter]=useState('2020');
    const onChangedFilterHandler = (newFilterSelected) => {
        setFilter(newFilterSelected);
    };
    return (    
        <div>
        <Card className="expenses">
            <ExpensesFilter onChangedFilter={onChangedFilterHandler} selectedValue={selectedFilter}></ExpensesFilter>    
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
        </Card>
        </div>
    );
}

export default Expenses;