import React from 'react';
import './style.css'
import { Layout, Col, Row, Pagination } from 'antd';
import { ProductCard } from '../../../../components/productCard';
import { withRouter } from 'react-router-dom';


const { Content } = Layout;


class DisplayContainer extends React.Component {
    
    render() {
        const RouterProductCard = withRouter(ProductCard);

        // 产品列表的Item列表数组
        const ProductsItem = this.props.products.map((product) => (
            <Col key={product.id + ""} span={5}>
                <RouterProductCard data={ product } />
            </Col>
        ))

        return (
            <Content className="container">
                <Row style={{paddingTop: "1.4em"}} justify="space-around" wrap={false}>
                    {ProductsItem}
                </Row>
                <Pagination 
                    className="pagenation-padding" 
                    defaultCurrent={1} 
                    total={this.props.total} 
                    onChange={this.props.paginationChange}
                    showSizeChanger={false}
                    pageSize={4}
                />
            </Content>
        );
    }
}

export {
    DisplayContainer
}

