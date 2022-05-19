import { CURRENCY_REQUEST, CURRENCY_GET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCY_REQUEST:
    return state;
  case CURRENCY_GET:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
}

export default wallet;
