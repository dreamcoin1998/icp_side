import React from 'react';
import { Layout, PageHeader, Row, Col } from 'antd';
import './style.css'
import { ProductCard } from '../../../../components/productCard';
import { withRouter, BrowserRouter } from 'react-router-dom';
import request from '../../../../../utils/request';


const { Content } = Layout;


class ProductRecomm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 1,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 2,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 3,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 4,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 5,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 6,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 7,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 8,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 9,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            },{
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/atour.png"],
                id: 10,
                price: 4000.00,
                product_name: "亚朵酒店",
                update_time: "2021-06-22 11:54"
            }]
        }
    }

    componentDidMount() {
        // TODO: 获取产品推荐列表
        var productRecommList;
    }

    render() {
        const RouterProductCard = withRouter(ProductCard);
        const RouterProductCardOne = this.state.products.slice(0, 5).map((product) => (
            <Col span={4}>
                <BrowserRouter>
                    <RouterProductCard data={ product } />                        
                </BrowserRouter>
            </Col>
        ))
        const RouterProductCardTwo = this.state.products.slice(5, 10).map((product) => (
            <Col span={4}>
                <BrowserRouter>
                    <RouterProductCard data={ product } />                        
                </BrowserRouter>
            </Col>
        ))

        return (
            <Content className="content">
                <PageHeader
                    title="为您推荐"
                    subTitle="海量资源 实时推荐"
                />
                <Row style={{paddingTop: "1.4em"}} justify="space-around" wrap={true}>
                    {RouterProductCardOne}
                </Row>
                <Row style={{paddingTop: "1.4em", paddingBottom: "1.4em"}} justify="space-around" wrap={true}>
                    {RouterProductCardTwo}
                </Row>
            </Content>
        );
    }
}

export {
    ProductRecomm
}
