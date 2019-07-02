// tslint:disable-next-line:no-var-requires
require('./styles/style');
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from 'react-dom';
import * as Pages from './pages';
import 'url-search-params-polyfill';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Pages.Root} />
    </Switch>
  </Router>
);

(() => {
  render(<App />, document.getElementById('app'));
})();
