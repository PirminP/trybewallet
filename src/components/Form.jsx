import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPICurrencyList } from '../actions';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      valueExpense: '',
      descriptionExpense: '',
      currencySelected: 'USD',
      paymentMethod: 'Dinheiro',
      categoryExpense: '',
    };
  }

  handleInputChange = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  formResetToInicial = () => {
    this.setState({
      valueExpense: '',
      descriptionExpense: '',
      currencySelected: 'USD',
      paymentMethod: 'Dinheiro',
      categoryExpense: 'Alimentação',
    });
  }

  render() {
    const { selectCurrency, IdToBe, expenseSave } = this.props;
    const {
      valueExpense,
      descriptionExpense,
      currencySelected,
      paymentMethod,
      categoryExpense,
    } = this.state;

    return (
      <form>
        <label htmlFor="valueExpense">
          Valor:
          <input
            id="valueExpense"
            type="number"
            data-testid="value-input"
            value={ valueExpense }
            onChange={ this.handleInputChange }
          />
        </label>

        <label htmlFor="descriptionExpense">
          Descrição:
          <input
            id="descriptionExpense"
            type="text"
            data-testid="description-input"
            value={ descriptionExpense }
            onChange={ this.handleInputChange }
          />

        </label>
        <label htmlFor="currencySelected">
          Moeda
          <select
            id="currencySelected"
            value={ currencySelected }
            onChange={ this.handleInputChange }
          >
            {selectCurrency.map((currencies, i) => (
              <option key={ i } value={ currencies }>
                { currencies }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select
            id="paymentMethod"
            data-testid="method-input"
            value={ paymentMethod }
            onChange={ this.handleInputChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoryExpense">
          Categoria:
          <select
            id="categoryExpense"
            data-testid="tag-input"
            value={ categoryExpense }
            onChange={ this.handleInputChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ () => {
            expenseSave({
              value: valueExpense,
              description: descriptionExpense,
              currency: currencySelected,
              method: paymentMethod,
              tag: categoryExpense,
            }, IdToBe);
            this.formResetToInicial();
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  selectCurrency: state.wallet.currencies,
  IdToBe: state.wallet.expenses.length,
});

const mapDispatchToProps = (dispatch) => ({
  expenseSave: (formObj, id) => dispatch(fetchAPICurrencyList(formObj, id)),
});

Form.propTypes = {
  selectCurrency: propTypes.arrayOf(propTypes.string).isRequired,
  IdToBe: propTypes.number.isRequired,
  expenseSave: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
