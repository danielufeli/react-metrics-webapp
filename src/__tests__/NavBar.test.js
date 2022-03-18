import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import NavBar from '../components/NavBar';

const TestRenderer = require('react-test-renderer');

it('Renders Header correctly', () => {
  const tree = TestRenderer
    .create(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
