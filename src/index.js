import React from 'react';
import ReactDOM from 'react-dom';
import {AppCitas} from './container/AppCitas'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './style/style.css'

import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppCitas/>
  </Provider>,
  document.getElementById('root')
);

