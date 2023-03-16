import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Registration from '../components/Registration';
import store from '../redux/configureStore';

describe('Testing Home', () => {
  let signup;
  beforeAll(async () => {
    signup = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Registration />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(signup).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(signup).toMatchSnapshot();
  });

  it('renders the first name input field', () => {
    const emailInput = waitFor(() => screen.getByPlaceholderText('first name'));
    waitFor(() => expect(emailInput).toBeInTheDocument());
    waitFor(() => expect(emailInput.type).toBe('first name'));
    waitFor(() => expect(emailInput.required).toBe(true));
  });

  it('renders the last name input field', () => {
    const emailInput = waitFor(() => screen.getByPlaceholderText('last name'));
    waitFor(() => expect(emailInput).toBeInTheDocument());
    waitFor(() => expect(emailInput.type).toBe('last name'));
    waitFor(() => expect(emailInput.required).toBe(true));
  });

  it('renders the email input field', () => {
    const emailInput = waitFor(() => screen.getByPlaceholderText('email'));
    waitFor(() => expect(emailInput).toBeInTheDocument());
    waitFor(() => expect(emailInput.type).toBe('email'));
    waitFor(() => expect(emailInput.required).toBe(true));
  });

  it('renders the password input field', () => {
    const emailInput = waitFor(() => screen.getByPlaceholderText('password'));
    waitFor(() => expect(emailInput).toBeInTheDocument());
    waitFor(() => expect(emailInput.type).toBe('password'));
    waitFor(() => expect(emailInput.required).toBe(true));
  });

  it('renders the confirm password input field', () => {
    const emailInput = waitFor(() => screen.getByPlaceholderText('confirm password'));
    waitFor(() => expect(emailInput).toBeInTheDocument());
    waitFor(() => expect(emailInput.type).toBe('confirm password'));
    waitFor(() => expect(emailInput.required).toBe(true));
  });
});
