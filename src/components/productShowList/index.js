import React from 'react';
import { Layout, PageHeader, Row, Col, Pagination } from 'antd';
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
            }],
            total: 11
        }
    }

    // componentDidMount() {
    //     // 获取产品推荐列表 接口联调取消注释
    //     const productRecommResponse = request('get', this.props.apiUrl);
    //     const productRecommListData = productRecommResponse.data;
    //     const productRecommList = productRecommListData.products;
    //     const productRecommListTotal = productRecommListData.total;
    //     this.setState({
    //         products: productRecommList,
    //         total: productRecommListTotal
    //     })
    // }

    /**
     * ProductCard组件规范显示
     * @returns 
     */
    formatProductCard(products) {
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
                <Col span={4}>
                    <BrowserRouter>
                        <RouterProductCard data={ product } />                        
                    </BrowserRouter>
                </Col>
            ))
            RouterProductCardListRows.push(
                <Row 
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
        const productRecommResponse = request('get', this.props.apiUrl + "?count=10&page=" + page);
        const productRecommListData = productRecommResponse.data;
        const productRecommList = productRecommListData.products;
        const productRecommListTotal = productRecommListData.total;
        this.setState({
            products: productRecommList,
            total: productRecommListTotal
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
