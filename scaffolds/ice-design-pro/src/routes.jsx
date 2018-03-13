/**
 * 定义应用路由
 */
import React from 'react';
import {
  Router,
  // browserHistory,
  hashHistory,
} from 'react-router';

// 路由配置规则参考： https://github.com/ReactTraining/react-router/blob/v3/docs/guides/RouteConfiguration.md#configuration-with-plain-routes
// 一下部分是由 ICE 相关工具自动生成的路由，请勿随意改变，否则可能会出现一些异常情况
// <!-- auto generated routes start -->
import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import Portlets from './pages/Portlets';
import Terms from './pages/Terms';
import Result from './pages/Result';
import Fail from './pages/Fail';
import ServerError from './pages/ServerError';
import Forbidden from './pages/Forbidden';
import Empty from './pages/Empty';
import List from './pages/List';
import CardList from './pages/CardList';
import BasicTable from './pages/BasicTable';
import TableDisplay from './pages/TableDisplay';
import NotFound from './pages/NotFound';

const autoGeneratedRoutes = [
  {
    path: '/table',
    childRoutes: [
      {
        path: 'basic-table',
        childRoutes: [],
        component: BasicTable,
      },
      {
        path: 'table-display',
        childRoutes: [],
        component: TableDisplay,
      },
    ],
    component: HeaderAsideFooterLayout,
    indexRoute: { component: BasicTable },
  },
  {
    path: '/list',
    childRoutes: [
      { path: 'article-list', childRoutes: [], component: List },
      { path: 'card-list', childRoutes: [], component: CardList },
    ],
    component: HeaderAsideFooterLayout,
    indexRoute: { component: List },
  },
  {
    path: '/exception',
    childRoutes: [
      { path: '500', childRoutes: [], component: ServerError },
      { path: '403', childRoutes: [], component: Forbidden },
      { path: '204', childRoutes: [], component: Empty },
      { path: '404', childRoutes: [], component: NotFound },
    ],
    component: HeaderAsideFooterLayout,
    indexRoute: { component: ServerError },
  },
  {
    path: '/result',
    childRoutes: [
      { path: 'success', childRoutes: [], component: Result },
      { path: 'fail', childRoutes: [], component: Fail },
    ],
    component: HeaderAsideFooterLayout,
    indexRoute: { component: Result },
  },
  {
    path: '/portlets',
    childRoutes: [
      { path: 'base', childRoutes: [], component: Portlets },
      { path: 'terms', childRoutes: [], component: Terms },
    ],
    component: HeaderAsideFooterLayout,
    indexRoute: { component: Portlets },
  },
  {
    path: '/chart',
    childRoutes: [{ path: 'chart-list', childRoutes: [], component: Charts }],
    component: HeaderAsideFooterLayout,
    indexRoute: { component: Charts },
  },
  {
    path: '/',
    childRoutes: [],
    component: HeaderAsideFooterLayout,
    indexRoute: { component: Dashboard },
  },
];

// <!-- auto generated routes end -->

// 自定义路由，如果 path 相同则会覆盖自动生成部分的路由配置
const customRoutes = [];

export default (
  <Router
    history={hashHistory}
    routes={[...autoGeneratedRoutes, ...customRoutes]}
  />
);
