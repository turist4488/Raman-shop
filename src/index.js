import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const Root = (

    <Provider store={store}>
      <Router basename="/Raman-shop">
        <App />
      </Router>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
