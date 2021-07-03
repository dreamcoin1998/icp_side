/**
 * 产品详情组件
 * 
 * @author Gao Junbin
 * @time 2021-06-28
 */

import React from 'react'
import { Col, Layout, Row, Image, Descriptions, Card, Avatar } from 'antd'
import request from '../../../utils/request'
import { TopBar } from '../../components/header'
import { FooterArea } from '../../components/footerArea'
import { DataInputArea } from '../../components/dataInputArea'
import './style.css'


const { Content } = Layout;
const { Meta } = Card;


export class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {
                
            },
            imageSelect: 0
        }
    }

    componentDidMount() {
        const pathNameSplit = this.props.location.pathname.split("/");
        const product_id = pathNameSplit[pathNameSplit.length-1]
        console.log(this.props.location.pathname.split("/"))
        const urlApi = "/v1.0/product/" + product_id;
        request("get", urlApi).then(response => {
            console.log(response.data);
            this.setState({
                product: response.data
            })
        })
    }

    handleClick(index) {
        console.log("点击了第 ", index, " 个图片");
        this.setState({
            imageSelect: index
        })
    }

    render() {

        if(JSON.stringify(this.state.product) === "{}") {
            return <></>
        }
        const formatedDate = new Date(this.state.product.update_time).format("yyyy-MM-dd hh:mm:ss");

        return (
            <Layout>
                <TopBar></TopBar>
                <Content className="content">
                    <Row className="row">
                        <Col span={8} xxl={5}>
                            <Image width="25em" height="20em" preview={false} src={this.state.product.images[this.state.imageSelect]}></Image>
                            <Row gutter={10}>
                                {((images) => images.map(function(image, index, array) {
                                    return (
                                        <Col span={5} onClick={this.handleClick.bind(this, index)}>
                                            <Image 
                                                className={this.state.imageSelect === index ? "image-border": ""} 
                                                preview={false} 
                                                src={image} 
                                                width="5.5em"
                                                hetght="4.5em"
                                            />
                                        </Col>
                                    )
                                }, this)).bind(this, this.state.product.images)()}
                            </Row>
                        </Col>
                        <Col span={10} xxl={13} style={{justifyContent: "center"}}>
                            <Descriptions 
                                title={<div className="title">{this.state.product.product_name}</div>}
                                column={2}
                                labelStyle={{color: "#AAAAAA", marginLeft: "0.5em"}}
                                contentStyle={{ fontWeight: "700" }}
                                style={{backgroundColor: "#FFF8F8"}}
                            >
                                <Descriptions.Item contentStyle={{color: "#D9001B"}} label="价格">{"￥" + this.state.product.price + "元"}</Descriptions.Item>
                                <Descriptions.Item label="库存">{this.state.product.inventory}</Descriptions.Item>
                                <Descriptions.Item label="产品类型">{this.state.product.product_type.type_name}</Descriptions.Item>
                                <Descriptions.Item label="发布时间">{formatedDate}</Descriptions.Item>
                            </Descriptions>
                            <Descriptions 
                                title={<div className="title-no-border">联系方式</div>}
                                column={1}
                                labelStyle={{color: "#AAAAAA", marginLeft: "0.5em"}}
                                contentStyle={{ fontWeight: "700" }}
                                style={{marginTop: "1em"}}
                            >
                                {this.state.product.user_info.email ? <Descriptions.Item label="电子邮箱">{this.state.product.user_info.email}</Descriptions.Item> : <></>}
                                {this.state.product.user_info.phone ? <Descriptions.Item label="手机号码">{this.state.product.user_info.phone}</Descriptions.Item> : <></>}
                            </Descriptions>
                        </Col>
                        <Col span={5} offset={1} xxl={5}>
                            <Card 
                                className="card-cover"
                            >
                                <Meta
                                    className="card"
                                    avatar={<Avatar src={this.state.product.user_info.avatar} size="large" />} 
                                />
                                <div className="username-text">{this.state.product.user_info.username}</div>
                                <div style={{marginTop: "2em", textIndent: "2em"}}>
                                    {this.state.product.user_info.introduction}
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Content>
                <Content className="content" style={{marginTop: 0}}>
                    <Card 
                        // className="card-cover"
                        title="产品详情"
                    >
                        <div style={{textIndent: "2em"}}>
                            {this.state.product.product_detail}
                        </div>
                    </Card>
                </Content>
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

