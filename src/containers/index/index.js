import React from 'react';
import { Layout } from 'antd';
import { TopBar } from '../../components/header';
import { NavigateBar } from './components/navigateBar';


const { Header, Footer, Sider, Content } = Layout;


class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <TopBar></TopBar>
                    <Layout style={{marginTop: "1em"}}>
                        <Sider>
                            <NavigateBar></NavigateBar>
                        </Sider>
                        {/* <Content>Content</Content> */}
                    </Layout>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </div>
        )
    }
}

export {IndexPage};