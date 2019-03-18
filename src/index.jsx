import React from 'react'
import { Provider } from 'react-redux'
import store from './Redux/Store/index'
import ReactDOM from 'react-dom'
import Routes from './Route/index'
import './css/common.css'

ReactDOM.render(
  <Provider store={store}>
        <Routes />
  </Provider>,
  document.getElementById('root')
)