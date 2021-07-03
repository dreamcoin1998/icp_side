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
        return new Promise((resolve, reject) => {
            request('get', '/v1.0/product/all?count=' + count + '&page=' + page)
                .then(productListResponse => {
                    const productListData = productListResponse.data;
                    const productListTotal = productListResponse.total;
                    resolve({productListData, productListTotal});
                })
        })
        
        
    }

    getProductTypied(key, count, page) {
         // 调用获取产品分类列表接口
         return new Promise((resolve, reject) => {
            request('get', "/v1.0/product/type?id=" + key + "&count=" + count + "&page=" + page)
                .then(productTypiedResponse => {
                    const productTypiedData = productTypiedResponse.data
                    const productTypiedTotal = productTypiedResponse.total;
                    resolve({productTypiedData, productTypiedTotal})
                })
         })
    }

    componentDidMount() {
        var productTypeData, productListData, productListTotal;
        // 调用获取产品类型列表接口
        request('get', '/v1.0/product/types').then((productTypeResponse) => {
            console.log("产品分类：", productTypeResponse.data)
            productTypeData = productTypeResponse.data;
            return this.getProductList(4, 1);
        }).then((productListResp) => {
            console.log(productListResp);
            productListData = productListResp.productListData;
            productListTotal = productListResp.productListTotal;
            this.setState({
                productTypes: productTypeData,
                products: productListData,
                productListTotal: productListTotal
    
            })
        })
    }

    handleSelect(data) {
        const { key } = data;
        if (key !== "productTypes") {
            this.getProductTypied(key, 4, 1).then(productTypiedResp => {
                const productTypiedData = productTypiedResp.productTypiedData;
                const productTypiedTotal = productTypiedResp.productTypiedTotal;
                this.setState({
                    navigatorKey: key,
                    products: productTypiedData,
                    productListTotal: productTypiedTotal
                })
            })
        }
    }
    
    handlePaginationChange(page, _) {
        // 用户点击全部产品信息
        if (this.state.navigatorKey === "productTypes") {
            this.getProductList(4, page).then((productListResp) => {
                const productListData = productListResp.productListData;
                const productListTotal = productListResp.productListTotal;
                this.setState({
                    products: productListData,
                    productListTotal: productListTotal
                })
            })
        // 用户点击产品分类
        } else {
            this.getProductTypied(this.state.navigatorKey, 4, page).then(productTypiedResp => {
                const productTypiedData = productTypiedResp.productTypiedData;
                const productTypiedTotal = productTypiedResp.productTypiedTotal;
                console.log(productTypiedData, productTypiedTotal);
                this.setState({
                    products: productTypiedData,
                    productListTotal: productTypiedTotal
                })
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
