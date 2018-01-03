// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import RepositorySearchComponent from 'components/repository/search'

class RootContainer extends Component {

  static childContextTypes = {
    token: PropTypes.string,
  }

  render() {
    return (
      <Router>
        <RepositorySearchComponent />
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
