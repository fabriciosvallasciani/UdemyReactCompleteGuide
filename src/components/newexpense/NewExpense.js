import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{
        const ExpenseData={
            ...enteredExpenseData,
            id: Math.random.toString()
        };
        props.onNewExpenseSubmit(ExpenseData);
    };

    return (
        <div className="new-expense"> 
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
        </div>
    )
};

export default NewExpense;