import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style';
import { GlobalFontStyle } from './statics/iconfont/iconfont'

ReactDOM.render(
  <Fragment>
    <GlobalStyle/>
    <GlobalFontStyle/>
    <App/>
  </Fragment>,
  document.getElementById('root')
)




