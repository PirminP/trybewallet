import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { emailSave } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailLogin: '',
      passwordLogin: '',
      isButtonDisabled: true,
    };
  }

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      () => ({ [name]: value }),
      () => this.validationInputs(),
    );
  }

  // Reserach validation Input values: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  validationInputs = () => {
    const validEmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validPasswordLength = 6;

    const { emailLogin, passwordLogin } = this.state;
    const inputsValid = (validEmailFormat.test(emailLogin)
      && passwordLogin.length >= validPasswordLength);

    this.setState({
      isButtonDisabled: !inputsValid,
    });
  }

  render() {
    const { emailLogin, passwordLogin, isButtonDisabled } = this.state;
    const { emailSend, history } = this.props;
    return (
      <div>
        <label htmlFor="emailLogin">
          Email:
          <input
            type="email"
            name="emailLogin"
            data-testid="email-input"
            value={ emailLogin }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="passwordLogin">
          Senha:
          <input
            type="password"
            name="passwordLogin"
            data-testid="password-input"
            value={ passwordLogin }
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          type="button"
          disabled={ isButtonDisabled }
          onClick={ () => {
            emailSend(emailLogin);
            history.push('/carteira');
          } }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailSend: (email) => dispatch(emailSave(email)),
});

Login.propTypes = {
  emailSend: propTypes.func.isRequired,
  history: propTypes.shape().isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
