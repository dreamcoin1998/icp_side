import React from 'react';
import { Layout } from 'antd';
import { TopBar } from '../../components/header';
import { ProductTypied } from './components/productTypied/index.js'
import { ProductRecomm } from './components/productRecomm/index.js'


const { Header, Footer, Sider, Content } = Layout;


class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <TopBar></TopBar>
                    {/* <ProductTypied></ProductTypied> */}
                    <ProductRecomm></ProductRecomm>
                    {/* <Footer>Footer</Footer> */}
                </Layout>
            </div>
        )
    }
}

export {IndexPage};