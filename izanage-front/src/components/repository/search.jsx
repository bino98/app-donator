// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Form } from 'antd'

import RepositoryDetailComponent from './detail'
import { searchRepository } from 'utils/github'

type State = {
  items: Array<RepoDetail>,
}

type RepoDetail = {
  name: string,
  url: string,
}

export default class RepositorySearchComponent extends Component <_, State> {

  static childContextTypes = {
    token: PropTypes.string,
  }

  state: State = {
    items: [],
  }

  searchOnChange(value) {
    timeout(1000)
    searchRepository({ q: value.target.value }).then(data => {
      this.setState({ items: data.items })
    })
  }

  itemsRender() {
    return this.state.items.map((item: RepoDetail) => {
      console.log(item)
      return (<RepositoryDetailComponent { ...item } />)
    })
  }

  render() {
    return (
      <div>
        <Input onChange={value => this.searchOnChange(value)} />
        { this.itemsRender() }
      </div>
    )
  }
}
