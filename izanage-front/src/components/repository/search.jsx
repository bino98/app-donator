// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Input, Form } from 'antd'

import RepositoryDetailComponent from './detail'
import { searchRepository } from 'utils/github'

type State = {
  items: Array<RepoDetail>,
  text: any,
  timer: any,
}

type RepoDetail = {
  name: string,
  url: string,
}

const WAIT_INTERVAL = 500

export default class RepositorySearchComponent extends Component <_, State> {

  static childContextTypes = {
    token: PropTypes.string,
  }
  
  state: State = {
    items: [],
  }

  handleOnChange(value) {
    clearTimeout(this.state.timer)
    const timer = setTimeout(() => this.searchOnChange(), WAIT_INTERVAL);
    this.setState({ text: value.target.value, timer })
  }

  searchOnChange() {
    const { text } = this.state
    if(text === '') { return }
    searchRepository({ q: text }).then(data => {
      this.setState({ items: data.items })
    })
  }

  itemsRender() {
    return this.state.items.map((item: RepoDetail) => {
      return (<RepositoryDetailComponent { ...item } />)
    })
  }

  render() {
    return (
      <div>
        <Input onChange={value => this.handleOnChange(value)} />
        { this.itemsRender() }
      </div>
    )
  }
}
