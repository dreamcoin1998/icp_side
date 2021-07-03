import React from 'react';
import './style.css'
import { Card } from 'antd';
import '../../../utils/formatDate'


class ProductCard extends React.Component {

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
        const formatedDate = new Date(this.props.data.update_time).format("yyyy-MM-dd hh:mm:ss");
        return (
            <Card
                hoverable
                cover={<img alt="example" src={this.props.data.images[0]} />}
                onClick={this.handleClick.bind(this, this.props.data.id)}
            >
                <div className="card-body text-color-bold">{"￥ " + this.props.data.price + "元"}</div>
                <div className="card-body" style={{ fontSize: "0.9em" }}>{this.props.data.product_name}</div>
                <div style={{ float:'right', marginTop: 5 }}>{formatedDate}</div>
            </Card>
        );
    }
}


export {
    ProductCard
};
