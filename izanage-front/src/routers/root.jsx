// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { LayoutComponent } from 'components/common/layout'
import RepositorySearchComponent from 'components/repository/search'

const history = createBrowserHistory()

export default class RootContainer extends Component {

  static childContextTypes = {
    token: PropTypes.string,
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <LayoutComponent>
          <Route path="/search" component={RepositorySearchComponent}/>
        </LayoutComponent>
      </BrowserRouter>
    )
  }
}
