// @flow

import React, { Component } from 'react'
import RepositorySearchComponent from 'components/repository/search'

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export const ContentComponent = (props) => (
  <Layout>
    <Header style={{ background: '#fff', padding: 0 }} />
    <Content style={{ margin: '24px 16px 0' }}>
      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
        { props.children }
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
)

export default {
  ContentComponent,
}