import React from 'react';
import { Layout } from 'antd';
import './style.css'
import { NavigateBar } from '../navigateBar/index.js'
import { DisplayContainer } from '../displayContainer';
import request from '../../../../../utils/request';


const { Sider } = Layout;


class ProductTypied extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 产品类型
            productTypes: [],
            // 产品分类/列表
            products: []
        };
    }

    componentDidMount() {
        // 调用获取产品类型列表接口
        const productTypeResponse = request('get', '/v1.0/product_types/')
        const productTypeData = productTypeResponse.data
        // 调用产品列表接口
        const productListResponse = request('get', '/v1.0/products?count=4&page=1')
        const productListData = productListResponse.data
        this.setState({
            productTypes: productTypeData,
            products: productListData
        })
    }

    handleSelect(data) {
        const { key } = data;
        // 调用获取产品分类列表接口
        const productTypiedResponse = request('get', "/v1.0/products/type?id=" + key + "&count=&page=")
        const productTypiedData = productTypiedResponse.data
        this.setState({
            products: productTypiedData
        })
    }

    render() {
        return (
            <Layout className="layout">
                <Sider style={{ backgroundColor: "#f2f2f2"}}>
                    <NavigateBar 
                        productTypes={this.state.productTypes} 
                        handleSelect={this.handleSelect.bind(this)}
                    />
                </Sider>
                <DisplayContainer products={this.state.products}/>
            </Layout>
        );
    }
}


export {
    ProductTypied
}
