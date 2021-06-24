import React from 'react';
import './style.css'
import { Layout, Col, Row, Pagination } from 'antd';
import { ProductCard } from '../../../../components/productCard';


const { Content } = Layout;


class DisplayContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productInfo: {
                images: ["https://cdn.xiangshuheika.com/static/xs_oak/spu/trainviproom.png"],
                price: 4000.00,
                product_name: "凯越酒店凯越酒店凯越酒店凯越酒店凯越酒店凯越酒店",
                update_time: "2021-06-24 11:50"
            }
        }
    }
    
    render() {
        
        // 产品列表的Item列表数组
        const ProductsItem = this.props.products.map((product) => (
            <Col span={5}>
                {/* TODO: 添加点击卡卡片跳转事件 */}
                <ProductCard data={ product } />
            </Col>
        ))

        return (
            <Content className="container">
                <Row style={{paddingTop: "1.4em"}} justify="space-around" wrap={false}>
                    <ProductsItem />
                </Row>
                <Pagination className="pagenation-padding" defaultCurrent={1} total={50} />
            </Content>
        );
    }
}

export {
    DisplayContainer
}

