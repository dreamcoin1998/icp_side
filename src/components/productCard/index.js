import React from 'react';
import './style.css'
import { Card } from 'antd';


class ProductCard extends React.Component {

    render() {
        return (
            <Card
                hoverable
                cover={<img alt="example" src={this.props.data.images[0]} />}
            >
                <div className="card-body text-color-bold">{"￥ " + this.props.data.price + "元"}</div>
                <div className="card-body" style={{ fontSize: "0.9em" }}>{this.props.data.product_name}</div>
                <div style={{ float:'right', marginTop: 5 }}>{this.props.data.update_time}</div>
            </Card>
        );
    }
}


export {
    ProductCard
};
