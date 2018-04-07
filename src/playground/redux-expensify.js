import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';





store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(state);
  
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 900,createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 400}));


// store.dispatch(setFilterText('ew'));
// store.dispatch(setFilterText());


store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(8100));


const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};


