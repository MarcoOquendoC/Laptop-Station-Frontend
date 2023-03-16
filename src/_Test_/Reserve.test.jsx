import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Reserve from '../components/Reserve';
import store from '../redux/configureStore';

describe('Testing Reserve', () => {
  let reserve;
  beforeAll(async () => {
    reserve = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Reserve />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(reserve).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(reserve).toMatchSnapshot();
  });

  test('renders the component with the correct heading', () => {
    const heading = waitFor(() => screen.getByRole('heading', { name: 'Reserve' }));
    waitFor(() => expect(heading).toBeInTheDocument());
  });
});
