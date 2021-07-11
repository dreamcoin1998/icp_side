import React from 'react';
import { Layout, PageHeader, Row, Col, Pagination, Empty } from 'antd';
import './style.css'
import { ProductCard } from '../productCard';
import { withRouter, BrowserRouter } from 'react-router-dom';
import request from '../../../utils/request';


const { Content } = Layout;


class ProductShowList extends React.Component {
    /**
     * 
     * isPage: 是否分页
     * isShowTotal：是否展示结果总数
     * title：标题
     * subTitle：子标题 
     */

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            total: 10
        }
    }

    componentDidMount() {
        var url;
        if (this.props.queryString) {
            url = this.props.apiUrl + this.props.queryString;
        } else {
            url = this.props.apiUrl;
        }
        console.log(url)
        if (this.props.apiUrl) {
            request('get', url).then(productsResponse => {
                const productsData = productsResponse.data;
                const productsTotal = productsResponse.total;
                this.setState({
                    products: productsData,
                    total: productsTotal
                })
            })
        }
    }

    /**
     * ProductCard组件规范显示
     * @returns 
     */
    formatProductCard(products) {
        console.log("运行", products.length)
        if (products.length === 0) {
            return <Empty />
        }
        const RouterProductCard = withRouter(ProductCard);
        var RouterProductCardListRows = [];
        var rowList = [];
        for (let count = 0; count < Math.ceil(products.length / 5); count++) {
            var productsList = products.slice(count * 5, (count + 1) * 5);
            rowList.push(productsList);
        }
        console.log(rowList)
        for (let index = 0; index < rowList.length; index++) {
            var RouterProductCardListCols = rowList[index].map((product) => (
                <Col key={product.id + ""} span={4}>
                    <RouterProductCard data={ product } />                        
                </Col>
            ))
            RouterProductCardListRows.push(
                <Row key={index + ""}
                    style={index == rowList.length - 1 ? {} : {paddingBottom: "1.4em"}} 
                    justify="space-around" 
                    wrap={true}
                >
                    {RouterProductCardListCols}
                </Row>
            )
        }
        return RouterProductCardListRows
    }

    paginationChange(page, _) {
        request('get', this.props.apiUrl + "?count=10&page=" + page).then(response => {
            const productListData = response.data;
            const productListTotal = response.total;
            this.setState({
                products: productListData,
                total: productListTotal
            })
        })
    }

    /**
     * 分页
     * @param {Boolean} isPage
     * @returns 
     */
    pagenationReactNode(isPage) {
        if (isPage) {
            return (
                <Pagination 
                    className="pagenation-padding" 
                    defaultCurrent={1}
                    total={this.state.total} 
                    defaultPageSize={this.props.pageSize || 10 }
                    onChange={this.paginationChange.bind(this)}
                    showTotal={total => this.props.isShowTotal && `总共 ${total} 条结果`}
                    showSizeChanger={false}
                />
            );
        }
    }

    render() {

        return (
            <Content className="content">
                <PageHeader
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                />
                {this.formatProductCard(this.state.products)}
                {this.pagenationReactNode(this.props.isPage)}
            </Content>
        );
    }
}

export {
    ProductShowList
}
