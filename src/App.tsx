import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AdditionalPage from 'components/pages/AdminList/AdditionalPage';
import Login from 'components/pages/Login/Login';
import Main from './components/pages/Main/Main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add" component={AdditionalPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
