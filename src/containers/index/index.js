import React from 'react';
import { Layout } from 'antd';
import { TopBar } from '../../components/header';


const { Header, Footer, Sider, Content } = Layout;


class IndexPage extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <TopBar></TopBar>
                    {/* <Layout>
                        <Sider>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer> */}
                </Layout>
            </>
        )
    }
}

export {IndexPage};