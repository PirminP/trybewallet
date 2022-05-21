import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { EmailUser, totalSpend } = this.props;
    return (
      <header>
        <div>
          <p>
            Email:
            <span data-testid="email-field">{EmailUser}</span>
          </p>
          <p>
            Despesa Total:
            <span data-testid="total-field">{ totalSpend || 0 }</span>
            <span data-testid="header-currency-field">BRL</span>
          </p>
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
