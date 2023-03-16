import { getByText } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import NavPrincipal from '../components/NavPrincipal';
import store from '../redux/configureStore';

describe('Testing Home', () => {
  let nav;
  beforeAll(async () => {
    nav = renderer
      .create(
        <Provider store={store}>
          <Router>
            <NavPrincipal />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(nav).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(nav).toMatchSnapshot();
  });

  it('renders desktop navigation menu items', () => {
    waitFor(() => expect(getByText('Home')).toBeInTheDocument());
    waitFor(() => expect(getByText('Log in')).toBeInTheDocument());
    waitFor(() => expect(getByText('Laptops')).toBeInTheDocument());
    waitFor(() => expect(getByText('Reserves')).toBeInTheDocument());
    waitFor(() => expect(getByText('Add item')).toBeInTheDocument());
    waitFor(() => expect(getByText('Log out')).toBeInTheDocument());
  });
});
