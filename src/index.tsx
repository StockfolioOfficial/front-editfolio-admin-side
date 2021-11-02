import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GlobalStyle from 'assets/styles/globalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Root from 'contexts/rootStore';
import App from './App';

const store = new Root();
const context = React.createContext(store);
const StoreProvider = context.Provider;
export const useStores = () => React.useContext(context);

ReactDOM.render(
  <StoreProvider value={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root'),
);
