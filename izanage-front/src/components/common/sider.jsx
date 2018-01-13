// @flow

import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import style from './sider.scss'

const { Sider } = Layout

const onSelect = (func) => {
  console.log(func)
}

export const SiderComponent = (props) =>(
    <Sider
    breakpoint="lg"
    collapsedWidth="0"
  >
    <div className={style.logo} />
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[window.location.pathname]}
      onSelect={(func) => onSelect(func)}
    >
      <Menu.Item key='/'>
        <Link to='/'><Icon type="home" />Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="/search">
        <Link to='/search'><Icon type="search" />Search</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span className="nav-text">nav 3</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="user" />
        <span className="nav-text">nav 4</span>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default {
  SiderComponent,
}