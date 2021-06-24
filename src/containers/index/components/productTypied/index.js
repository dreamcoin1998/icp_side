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
            products: [],
            // 产品列表产品总数
            productListTotal: 0,
            // 导航栏点击状态
            navigatorKey: "productTypes"
        };
    }

    getProductList(count, page) {
        // 调用产品列表接口
        const productListResponse = request('get', '/v1.0/products?count=' + count + '&page=' + page);
        const productListData = productListResponse.data;
        const productListTotal = productListResponse.total;
        return productListData, productListTotal;
    }

    getProductTypied(key, count, page) {
         // 调用获取产品分类列表接口
         const productTypiedResponse = request('get', "/v1.0/products/type?id=" + key + "&count=" + count + "&page=" + page)
         const productTypiedData = productTypiedResponse.data
         return productTypiedData
    }

    componentDidMount() {
        // 调用获取产品类型列表接口
        const productTypeResponse = request('get', '/v1.0/product_types/');
        const productTypeData = productTypeResponse.data;
        console.log(this.getProductList(4, 1))
        const {productListData, productListTotal} = this.getProductList(4, 1);
        this.setState({
            productTypes: productTypeData,
            products: productListData,
            productListTotal: productListTotal

        })
    }

    handleSelect(data) {
        const { key } = data;
        if (key !== "productTypes") {
            const productTypiedData = this.getProductTypied(key, 4, 1);
            this.setState({
                navigatorKey: key,
                products: productTypiedData
            })
        }
    }
    
    handlePaginationChange(page, _) {
        // 用户点击全部产品信息
        if (this.state.navigatorKey === "productTypes") {
            const {productListData, productListTotal} = this.getProductList(4, page);
            this.setState({
                products: productListData,
                productListTotal: productListTotal
    
            });
        // 用户点击产品分类
        } else {
            const productTypiedData = this.getProductTypied(this.state.navigatorKey, 4, page);
            this.setState({
                products: productTypiedData
            })
        }
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
                <DisplayContainer 
                    products={this.state.products} 
                    total={this.state.productListTotal}
                    paginationChange={this.handlePaginationChange.bind(this)}
                />
            </Layout>
        );
    }
}


export {
    ProductTypied
}
