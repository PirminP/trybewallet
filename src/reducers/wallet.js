import expensesTotal from '../pages/expensesTotal';
import {
  CURRENCY_REQUEST,
  CURRENCY_GET,
  EXPENSES_SAVE,
  EXPENSES_TOTAL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY_REQUEST:
    return state;
  case CURRENCY_GET:
    return { ...state, currencies: action.payload };
  case EXPENSES_SAVE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case EXPENSES_TOTAL:
    return { ...state, total: expensesTotal(state.expenses) };
  default:
    return state;
  }
}

export default wallet;
