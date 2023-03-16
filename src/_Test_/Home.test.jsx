import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from "../components/Home";
import store from "../redux/configureStore";

describe('Testing Home', () => {
  let home;
  beforeAll(async () => {
    home = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(home).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(home).toMatchSnapshot();
  });

  it('renders the component', () => {
    waitFor(() => expect(screen.getByText('Latest Models')).toBeInTheDocument());
    waitFor(() => expect(screen.getByText('Please select a Laptop Model')).toHaveLength(2));
  });

  it('Should have a link to the details page', () => {
    const link = screen.findByTestId('laptop-card');
    waitFor(() => expect(link).toBeInTheDocument());
    waitFor(() => expect(link).toHaveAttribute('href'));
  });
});