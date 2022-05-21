import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPICurrency } from '../actions';
import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { globalStateCurr } = this.props;
    globalStateCurr();
  }

  render() {
    return (
      <div>
        <div>TrybeWallet</div>
        <Header />
        <Form />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  globalStateCurr: () => dispatch(fetchAPICurrency()),
});

Wallet.propTypes = {
  globalStateCurr: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
