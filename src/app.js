import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setFilterText} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss'

const store = configureStore();

store.dispatch(addExpense({ description: 'School fees', amount: 60000 }));
store.dispatch(addExpense({ description: 'Iphone 7', amount: 42000 }));

store.dispatch(setFilterText('e'));


const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />,document.getElementById('app'));

