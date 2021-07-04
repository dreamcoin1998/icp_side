import React from 'react'
import { ProductShowList } from '../../components/productShowList/index.js'
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout } from 'antd';
import { TopBar } from '../../components/header';
import  qs  from 'qs'


class ProductSearch extends React.Component {

    render() {
        const queryString = this.props.location.search;
        const { product_name } = qs.parse(queryString, { ignoreQueryPrefix: true });
        const searchApi = "/v1.0/product/search" + queryString;

        return (
            <Layout>
                <TopBar></TopBar>
                <ProductShowList
                    title={ "搜索 “" + product_name + "” 结果"}
                    apiUrl={searchApi}
                    isPage={true}
                    isShowTotal={true}
                    queryString={queryString}
                />
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

export {
    ProductSearch
}