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
                images: [
                    "https://cdn.xiangshuheika.com/static/xs_oak/spu/airportviproom.png",
                    "https://www.gaoblog.cn/about/info_files/hulianwang.jpg",
                    "https://cdn.xiangshuheika.com/static/xs_oak/spu/airportviproom.png",
                    "https://cdn.xiangshuheika.com/static/xs_oak/spu/airportviproom.png",
                ]
            },
            imageSelect: 0
        }
    }

    handleClick(index) {
        console.log("点击了第 ", index, " 个图片");
        this.setState({
            imageSelect: index
        })
    }

    render() {

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
                                title={<div className="title">厂家直供生态人工浮岛 生态种植浮床 水环境治理岛 水生植物浮板 荣文</div>}
                                column={2}
                                labelStyle={{color: "#AAAAAA", marginLeft: "0.5em"}}
                                contentStyle={{ fontWeight: "700" }}
                                style={{backgroundColor: "#FFF8F8"}}
                            >
                                <Descriptions.Item contentStyle={{color: "#D9001B"}} label="价格">￥4000.00 元</Descriptions.Item>
                                <Descriptions.Item label="库存">不限</Descriptions.Item>
                                <Descriptions.Item label="产品类型">美食餐饮</Descriptions.Item>
                                <Descriptions.Item label="发布时间">2021-06-22 13:22</Descriptions.Item>
                            </Descriptions>
                            <Descriptions 
                                title={<div className="title-no-border">联系方式</div>}
                                column={1}
                                labelStyle={{color: "#AAAAAA", marginLeft: "0.5em"}}
                                contentStyle={{ fontWeight: "700" }}
                                style={{marginTop: "1em"}}
                            >
                                <Descriptions.Item label="电子邮箱">1285338586@qq.com</Descriptions.Item>
                                <Descriptions.Item label="手机号码">15259695263</Descriptions.Item>
                            </Descriptions>
                        </Col>
                        <Col span={5} offset={1} xxl={5}>
                            <Card 
                                className="card-cover"
                            >
                                <Meta
                                    className="card"
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" />}       
                                />
                                <div className="username-text">廊坊荣文建材公司</div>
                                <div style={{marginTop: "2em", textIndent: "2em"}}>
                                    使用橡树定制化会员服务，包含星级酒店权益、休息室、京东e卡等，定向免费赠送给本行高端用户，从而提升银行口碑与核心用户忠诚度
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
                            橡树黑卡成立于2018年，是国内领先一站式付费会员制权益服务商，致力于付费会员这一新的智能商业模式的创新与演进，创始团队来自于腾讯、平安、苏宁、乐信等，在会员服务领域拥有丰富的行业积累与成功经验，并在多行业展开了多元和深入的合作。橡树黑卡秉承“让消费更有意义”理念，面向C端用户提供各类会员权益，从出行到生活全方位服务于客户。面向B端企业，深度整合供应链，结合平台用户特征，推出定制化付费会员体系，帮助企业提高用户价值,实现新业务创收。
                        </div>
                    </Card>
                </Content>
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

