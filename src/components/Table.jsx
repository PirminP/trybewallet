import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { collectedExpenses } = this.props;
    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {collectedExpenses
        // Research using map in table: https://stackoverflow.com/questions/57457547/how-to-use-map-to-create-html-table-in-react
          .map(({ value, description, currency, method, tag, id, exchangeRates }) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ Number(value).toFixed(2) }</td>
              <td>{ exchangeRates[currency].name.split('/') }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{ (value * exchangeRates[currency].ask).toFixed(2) }</td>
              <td>Real</td>
            </tr>))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  collectedExpenses: state.wallet.expenses,
});

Table.propTypes = {
  collectedExpenses: propTypes.arrayOf(propTypes.shape()).isRequired,
};

export default connect(mapStateToProps, null)(Table);
