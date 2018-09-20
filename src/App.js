import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/home'
import store from './store'
import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route path='/' exact component={Home} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
