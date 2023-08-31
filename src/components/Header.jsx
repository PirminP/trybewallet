import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.css';

class Header extends React.Component {
  render() {
    const { EmailUser, totalSpend } = this.props;
    return (
      <header className="wallet-header">
        <h3>Hoi, Wallet!</h3>
        <div className="wallet-header-div">
          <h5>
            Email:
            <span data-testid="email-field">{EmailUser}</span>
          </h5>
          <h5>
            Despesa Total:
            <span data-testid="total-field">{ totalSpend || 0 }</span>
            <span data-testid="header-currency-field">BRL</span>
          </h5>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  EmailUser: state.user.email,
  totalSpend: state.wallet.total,
});

Header.propTypes = {
  EmailUser: propTypes.string.isRequired,
  totalSpend: propTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
