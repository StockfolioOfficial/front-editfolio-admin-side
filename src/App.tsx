import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdminList from 'components/pages/AdminList/AdminList';
import RequestProductionPage from 'components/pages/Main/RequestProductionPage';
import Login from 'components/pages/Login/Login';
import Main from './components/pages/Main/Main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin-list" component={AdminList} />
        <Route
          exact
          path="/request-production"
          component={RequestProductionPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
