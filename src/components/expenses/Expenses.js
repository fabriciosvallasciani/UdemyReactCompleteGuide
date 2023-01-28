import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) =>{
    const [selectedFilter,setFilter]=useState('2020');
    const filteredData = props.data
                .filter(exp => {return exp.date.getFullYear().toString() === selectedFilter;});
    const onChangedFilterHandler = (newFilterSelected) => {
        setFilter(newFilterSelected);
    };

    
    return (    
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangedFilter={onChangedFilterHandler} selectedValue={selectedFilter}></ExpensesFilter>    
                <ExpensesList items={filteredData}></ExpensesList>
            </Card>
        </div>
    );
}

export default Expenses;