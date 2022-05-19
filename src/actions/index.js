export const EMAIL_SAVE = 'EMAIL_SAVE';
export const CURRENCY_REQUEST = 'CURRENCY_REQUEST';
export const CURRENCY_GET = 'CURRENCY_GET';

export const emailSave = (email) => ({ type: EMAIL_SAVE, payload: email });
export const currencyRequest = () => ({ type: CURRENCY_REQUEST });
export const currencyGet = (currArray) => ({ type: CURRENCY_GET, payload: currArray });

export function fetchAPICurrency() {
  return async (dispatch) => { // call thunk
    dispatch(currencyRequest());
    const returnAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataAPI = await returnAPI.json();
    // Research return array of object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    const dataAPIArray = Object.keys(dataAPI);
    const filteredData = dataAPIArray.filter((curr) => curr !== 'USDT');
    dispatch(currencyGet(filteredData));
  };
}
