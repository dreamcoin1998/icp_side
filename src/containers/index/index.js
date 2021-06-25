import React from 'react';
import { Layout } from 'antd';
import { TopBar } from '../../components/header';
import { ProductTypied } from './components/productTypied/index.js'
import { ProductShowList } from '../../components/productShowList/index.js'
import { FooterArea } from '../../components/footerArea/index.js';


class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <TopBar></TopBar>
                    {/* <ProductTypied></ProductTypied> */}
                    <ProductShowList
                        title="为您推荐" 
                        subTitle="海量资源 实时推荐" 
                        apiUrl="/v1.0/product/recommond"
                        isPage={true}
                        isShowTotal={false}
                    />
                    <FooterArea></FooterArea>
                </Layout>
            </div>
        )
    }
}

export {IndexPage};