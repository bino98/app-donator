// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class RootContainer extends Component {
  render() {
    return (
      <Router>
        <div>hoge</div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
