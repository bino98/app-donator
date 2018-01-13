// @flow

import React, { Component } from 'react'
import { SiderComponent } from './sider'
import { ContentComponent } from './content'

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export const LayoutComponent = (props) => (
  <Layout>
    <SiderComponent { ...props } />
    <ContentComponent { ...props } />
  </Layout>
)

export default {
  LayoutComponent,
}
