import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends React.Component {
  render() {
    const { selectCurrency } = this.props;
    return (
      <form>
        <label htmlFor="valueExpense">
          Valor:
          <input id="valueExpense" type="number" data-testid="value-input" />
        </label>
        <label htmlFor="descriptionExpense">
          Descrição:
          <input id="descriptionExpense" type="text" data-testid="description-input" />
        </label>
        <label htmlFor="currencies">
          Moeda
          <select id="currencies">
            {selectCurrency.map((currencies, i) => (
              <option key={ i } value={ currencies }>
                { currencies }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="paymentMethod">
          Método de pagamento:
          <select id="paymentMethod" data-testid="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoryExpense">
          Categoria:
          <select id="categoryExpense" data-testid="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  selectCurrency: state.wallet.currencies,
});

Form.propTypes = {
  selectCurrency: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps, null)(Form);
