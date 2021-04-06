import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import { GlobalIconfont } from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle/> 
    <GlobalIconfont/> 
    <App />
  </Fragment>,
  document.getElementById('root')
);



