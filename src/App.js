import React, {useState} from 'react';
import './App.css';
import {ConfigProvider, Layout, Menu} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import MainLogoUrl from './img/main-logo.png'
import {BrowserRouter as Router,} from 'react-router-dom'
import routes from './feature/router'
import renderLinks from "./common/utils/renderLinks";
import renderRoutes from "./common/utils/renderRoutes";

const {Header, Sider, Content} = Layout;
// const {SubMenu} = Menu;

moment.locale('zh-cn');

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [logoHeight, setLogoHeight] = useState('60px');
  const [logoMargin, setLogoMargin] = useState('0 0 0 38px');

  const toggle = () => {
    setCollapsed(!collapsed);
    setTimeout(() => {
      setLogoHeight(collapsed ? '60px' : '2vh');
      setLogoMargin(collapsed ? '0 0 0 38px' : '17px');
    }, 100);
  };

  return (
      <ConfigProvider locale={zhCN}>
        <Layout id="all">
          <Router>
            <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
              <img src={MainLogoUrl} alt="logo" style={{
                height: logoHeight,
                margin: logoMargin
              }}/>
              <Menu id="sideMenu" theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {routes.map((item, idx) => renderLinks(item, idx))}
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{padding: 0}}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
              </Header>
              <Content
                  style={{
                    margin: '24px 16px',
                    padding: '24px'
                  }}
                  className="site-layout-background"
              >
                {renderRoutes(routes)}
              </Content>
            </Layout>
          </Router>
        </Layout>
      </ConfigProvider>
  );
};

export default App;
