import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const filters = ['2022', '2021', '2020', '2019'];

  const onChangeHandler = (event) => {
    props.onChangedFilter(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={onChangeHandler} value={props.selectedValue}>
          <option value={filters[0]}>{filters[0]}</option>
          <option value={filters[1]}>{filters[1]}</option>
          <option value={filters[2]}>{filters[2]}</option>
          <option value={filters[3]}>{filters[3]}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;