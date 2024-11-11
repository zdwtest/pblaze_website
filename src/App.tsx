import React from 'react';
import { Layout , Menu, Breadcrumb,theme } from 'antd';

const { Header, Content, Footer } = Layout;
const nav_number = 5; //标签页数量
const items = new Array(nav_number).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <div className="App">
            <Layout>

                <Header style={{display: 'flex', alignItems: 'center'}}>
                    <h1 color={'blue'}>
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
                    <p>PBlaze Tech© 2024 PBlaze.com. <a href="/LICENSE">Apache License 2.0</a>. KaliJerry保留所有权利。</p>
                </Footer>
            </Layout>
        </div>
    );
};

export default App;