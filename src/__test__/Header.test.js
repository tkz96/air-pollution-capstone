import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../Components/Header';
import store from '../app/store';

describe('Home tests', () => {
  it('render home', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
