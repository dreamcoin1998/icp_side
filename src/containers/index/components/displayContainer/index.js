import React from 'react';
import './style.css'
import { Layout, Col, Row, Pagination } from 'antd';
import { ProductCard } from '../../../../components/productCard';


const { Content } = Layout;


class DisplayContainer extends React.Component {

    /**
     * 跳转到产品详情页
     * @param id 产品id
     */
    handleClick(id) {
        if (id) {
            this.props.history.push("/product/detail/" + id)
        }
    }
    
    render() {
        
        // 产品列表的Item列表数组
        const ProductsItem = this.props.products.map((product) => (
            <Col span={5}>
                <ProductCard data={ product } onClick={this.handleClick.bind(this, product.id)}/>
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
                    defaultPageSize={4}
                    onChange={this.props.paginationChange}
                />
            </Content>
        );
    }
}

export {
    DisplayContainer
}

