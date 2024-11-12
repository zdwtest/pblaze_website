import React from 'react';
import { Layout , Menu, Breadcrumb,theme } from 'antd';
import AppMenuLeft from './tsx/menu_left';

const { Header, Content, Footer, Sider } = Layout;
const currentYear = new Date().getFullYear(); //版权年份
const items = [
    {
        label: '主页',
        key: '1',
        onClick: () => { window.location.href = '/'; }
    },
    {
        label: '关于我们',
        key: '2',
        onClick: () => { window.location.href = '/about'; }
    },
    {
        label: '版权信息',
        key: '3',
        onClick: () => { window.location.href = '/copyright'; }
    },
];



const App: React.FC = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <div className="App">
            <Layout>
                <Header style={{display: 'flex', alignItems: 'center'}}>
                    <h1 style={{ color: 'white' }}>
                        PBlaze
                    </h1>
                    <div className="pblaze-logo"/>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{flex: 1, minWidth: 0}}
                    />
                </Header>
            <Layout>
                <Sider width={200} style={{background: colorBgContainer }}> {/* 使用 Sider 组件 */}
                    <AppMenuLeft /> {/*  渲染左侧菜单组件 */}
                </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content style={{padding: '0 48px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>主页</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            background: colorBgContainer,
                            minHeight: 280,
                            padding: 24,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <h1>欢迎来到PBlaze</h1>
                        <p>这是一个基于React的前端项目</p>
                        <p>项目地址：<a href='https://github.com/zdwtest/pblaze_website'>Github.com</a>
                        </p>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <p>Copyright © 2024-{currentYear} KaliJerry. Licensed under the <a href="/LICENSE">Apache License 2.0</a> PBlaze.com.</p>
                </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    );
};


export default App;