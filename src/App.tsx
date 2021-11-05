import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { useStores } from 'index';
import FetchData from 'service/fetch';
import Header from 'components/pages/Header';
import Login from 'components/pages/Login';
import RequestProductionPage from 'components/pages/Main/RequestProductionPage';
import RequestProductingPage from 'components/pages/Main/RequestProductingPage';
import RequestFinishPage from 'components/pages/Main/RequestFinishPage';
import RequestEditPage from 'components/pages/Main/RequestEditPage';
import OrderDetailPage from 'components/pages/Main/OrderDetailPage';
import AdminListPage from 'components/pages/Main/AdminListPage';
import CustomerListPage from 'components/pages/Main/CustomerListPage';
import Aside from 'components/pages/Aside';
import CustomerAddPage from 'components/Customer/CustomerAddPage';
import CustomerDetailPage from 'components/pages/Main/CustomerDetailPage';
import AdminAddPage from 'components/Admin/AdminAddPage';
import AdminEditPage from 'components/Admin/AdminEditPage';
import AdminEditPwPage from 'components/Admin/AdminEditPwPage';

function Wrapper({ children }: React.HTMLAttributes<HTMLDivElement>) {
  const history = useHistory();
  const { userStore, adminStore } = useStores();
  const { setUser } = userStore;
  const { setCreator } = adminStore;
  const { getMyData, getCreatorList } = new FetchData();

  async function checkToken() {
    const res = await getMyData();
    if (!res) {
      history.push('/login');
      return;
    }
    setUser({
      name: res.name,
      nickname: res.nickname,
      username: res.username,
      userId: res.userId,
      roles: res.roles,
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

function RenderMain() {
  return (
    <>
      <Header />
      <MainBox>
        <Aside />
        <MainLayout>
          <Switch>
            <Route exact path="/" component={RequestProductionPage} />
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
            <Route exact path="/request-edit" component={RequestEditPage} />
            <Route exact path="/request-finish" component={RequestFinishPage} />
            <Route
              exact
              path="/order-detail/:page/:id"
              component={OrderDetailPage}
            />
            <Route exact path="/admin-list" component={AdminListPage} />
            <Route exact path="/admin-add" component={AdminAddPage} />
            <Route exact path="/admin-edit/:id" component={AdminEditPage} />
            <Route
              exact
              path="/admin-edit-pw/:id"
              component={AdminEditPwPage}
            />
            <Route exact path="/customer-list" component={CustomerListPage} />
            <Route exact path="/customer-add" component={CustomerAddPage} />
            <Route
              exact
              path="/cutomer-detail/:id"
              component={CustomerDetailPage}
            />
          </Switch>
        </MainLayout>
      </MainBox>
    </>
  );
}

const MainBox = styled.main`
  display: flex;
`;

const MainLayout = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  width: calc(100% - 324px);
  padding: 0 32px;
  background-color: #fafafa;
`;

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={RenderMain} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
