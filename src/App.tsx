import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Login from 'components/pages/Login';
import RequestProductionPage from 'components/pages/Main/RequestProductionPage';
import RequestProductingPage from 'components/pages/Main/RequestProductingPage';
import RequestFinishPage from 'components/pages/Main/RequestFinishPage';
import DetailPage from 'components/pages/Main/DetailPage';
// import AdminList from 'components/pages/AdminList';
// import CustomerListPage from 'components/pages/Main/CustomerListPage';
import FetchData from 'service/fetch';
import { useStores } from 'index';

function Wrapper({ children }: React.HTMLAttributes<HTMLDivElement>) {
  const history = useHistory();
  const { userStore, adminStore } = useStores();
  const { setUser } = userStore;
  const { setCreator } = adminStore;
  const { getAdminData, getCreatorList } = new FetchData();

  async function checkToken() {
    const res = await getAdminData();
    if (!res) {
      history.push('/login');
      return;
    }
    setUser({
      name: res.name,
      nickname: res.nickname,
      email: res.username,
      userId: res.userId,
    });
    const creatorList = await getCreatorList();
    if (!creatorList) return;
    setCreator(creatorList);
  }

  useEffect(() => {
    console.log('스타트');
    checkToken();
  }, []);
  return <>{children}</>;
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={RequestProductionPage} />
          <Route exact path="/login" component={Login} />
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
          {/* <Route exact path="/admin-list" component={AdminList} /> */}
          {/* <Route exact path="/customer-list" component={CustomerListPage} /> */}
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
