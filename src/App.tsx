import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import AdminList from 'components/pages/AdminList/AdminList';
import RequestProductingPage from 'components/pages/Main/RequestProductingPage';
import RequestFinishPage from 'components/pages/Main/RequestFinishPage';
import RequestProductionPage from 'components/pages/Main/RequestProductionPage';
import Login from 'components/pages/Login/Login';
import CustomerListPage from 'components/pages/Main/CustomerListPage';
import DetailPage from 'components/pages/Main/DetailPage';

function App(): JSX.Element {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('edit-token');
    if (token) return;
    history.push('/login');
  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RequestProductionPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin-list" component={AdminList} />
        <Route
          exact
          path="/request-production"
          component={RequestProductionPage}
        />
        <Route
          exact
          path="/request-producting"
          component={RequestProductingPage}
        />
        <Route exact path="/request-finish" component={RequestFinishPage} />
        <Route exact path="/detail/:page/:id" component={DetailPage} />
        <Route exact path="/customer-list" component={CustomerListPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
