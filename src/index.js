import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './store/reducers';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e60000',
    },
    secondary: {
      main: '#e60000',
      light: '#e60000',
    },
  },
});

const store = createStore(
  rootReducer
);
ReactDOM.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
