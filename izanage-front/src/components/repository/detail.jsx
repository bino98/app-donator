// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

type Props = {
  name: string,
  url: string,
}

export default class RepositoryDetailComponent extends Component {
  render() {
    return (<Card
      title={this.props.name}
      extra={<a href="#">{this.props.url}</a>}
    />)
  }
}
