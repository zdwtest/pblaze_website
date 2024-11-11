import React from 'react';
import { Layout , Menu, Breadcrumb,theme } from 'antd';
import logo from '/src/img/pblaze_logo.png';
const { Header, Content, Footer } = Layout;
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
                <Content style={{padding: '0 48px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            background: colorBgContainer,
                            minHeight: 280,
                            padding: 24,
                            borderRadius: borderRadiusLG,
                        }}
                    >Content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <p>Copyright © 2024-{currentYear} KaliJerry. Licensed under the <a href="/LICENSE">Apache License 2.0</a> PBlaze.com.</p>
                </Footer>
            </Layout>
        </div>
    );
};

export default App;