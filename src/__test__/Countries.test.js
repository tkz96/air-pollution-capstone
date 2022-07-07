import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Countries from '../Pages/Countries';
import store from '../app/store';

describe('Countries tests', () => {
  it('render countries', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Countries />
        </Router>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});
