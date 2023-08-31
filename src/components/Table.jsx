import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';

class Table extends React.Component {
  render() {
    const { collectedExpenses } = this.props;
    return (
      <section className="table-container">
        <table className="table table-striped">
          <thead>
            <tr className="table-info">
              <th scope="col">Descrição</th>
              <th scope="col">Tag</th>
              <th scope="col">Método de pagamento</th>
              <th scope="col">Valor</th>
              <th scope="col">Moeda</th>
              <th scope="col">Câmbio utilizado</th>
              <th scope="col">Valor convertido</th>
              <th scope="col">Moeda de conversão</th>
              <th scope="col">Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
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
                  <td className="table-button-container">
                    <button
                      className="btn btn-info"
                      type="button"
                      data-testid="edit-btn"
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-dark"
                      type="button"
                      data-testid="delete-btn"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>))}
          </tbody>
        </table>
      </section>
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
