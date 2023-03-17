import { getByAltText, getByText } from '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Detail from '../components/Detail';

describe('Testing Detail', () => {
  let details;
  beforeAll(async () => {
    details = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Detail />
          </Router>
        </Provider>,
      )
      .toJSON();
  });

  it('should renders correctly', () => {
    expect(details).toBeTruthy();
  });

  it('should match the snapshot', () => {
    expect(details).toMatchSnapshot();
  });

  it('Should have a link to the reservation page', () => {
    const link = screen.findByTestId('reserve-link');
    waitFor(() => expect(link).toBeInTheDocument());
    waitFor(() => expect(link).toHaveAttribute('href'));
  });

  const mockLaptops = [
    {
      id: 1,
      image_url: 'https://limalocal.com/laptopstation/images/rog_strix.png',
      title: 'ROG Strix SCAR 15',
      item_model: 'G532LW-AZ088T',
      serial_n: '00000_000_0000000',
      description: 'NVIDIA® GeForce RTX™ 4080 Laptop GPU.',
    },
  ];

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: '1' }),
  }));

  it('Details of a laptop are correctly displayed', () => {
    jest.spyOn(store, 'getState').mockReturnValue({
      trips: {
        status: 'succeeded',
        trips: mockLaptops,
      },
    });

    waitFor(() => expect(getByAltText('details')).toHaveAttribute('src', 'https://limalocal.com/laptopstation/images/rog_strix.png'));
    waitFor(() => expect(getByText('ROG Strix SCAR 15')).toBeInTheDocument());
    waitFor(() => expect(getByText('G532LW-AZ088T')).toBeInTheDocument());
    waitFor(() => expect(getByText('00000_000_0000000')).toBeInTheDocument());
    waitFor(() => expect(getByText('NVIDIA® GeForce RTX™ 4080 Laptop GPU.')).toBeInTheDocument());
  });
});
