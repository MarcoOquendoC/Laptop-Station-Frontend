import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Session from '../components/Session';
import store from "../redux/configureStore";

describe('Testing Home', () => {
  let login;
  beforeAll(async () => {
    login = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Session />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(login).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(login).toMatchSnapshot();
  });

  it('renders the email input field', () => {
    const emailInput = waitFor(() => screen.getByPlaceholderText('email'));
    waitFor(() => expect(emailInput).toBeInTheDocument());
    waitFor(() => expect(emailInput.type).toBe('email'));
    waitFor(() => expect(emailInput.required).toBe(true));
  });

  it('renders the password input field', () => {
    const passwordInput = waitFor(() => screen.getByPlaceholderText('password'));
    waitFor(() => expect(passwordInput).toBeInTheDocument());
    waitFor(() => expect(passwordInput.type).toBe('password'));
    waitFor(() => expect(passwordInput.required).toBe(true));
  });
});