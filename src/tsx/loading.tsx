import React from 'react';
import { Alert, Flex, Spin } from 'antd';

const contentStyle: React.CSSProperties = {
    padding: 50,
    background: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 4,
};

const content = <div style={contentStyle} />;

const AppLoading: React.FC = () => (
    <Flex gap="middle" vertical>
            <Spin tip="加载中请稍后" size="large" delay={500}>
                {content}
            </Spin>
    </Flex>
);
const AppLoadingError: React.FC = () => (
    <Flex gap="middle" vertical>
        <Spin tip="遇到错误正在加载中">
            <Alert
                message="警告"
                description="存在错误，请稍后再试"
                type="info"
            />
        </Spin>
    </Flex>
);
export default AppLoading;
export { AppLoadingError };
