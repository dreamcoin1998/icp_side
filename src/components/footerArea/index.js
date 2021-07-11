import React from 'react';
import { Layout, Row, Col, Button, Modal } from 'antd'
import './style.css'
import { logo } from '../../../public/logoBase64';
import { ProtocolButton } from '../protocolButton';


const { Footer } = Layout;

class FooterArea extends React.Component {

    render() {

        return (
            <Footer className="footer">
                <Row>
                    <Col xxl={3}></Col>
                    <Col span={4}>
                        <img src={logo} style={{width: "123px"}}></img>
                    </Col>
                </Row>
                <Row>
                    <Col xxl={3}></Col>
                    <Col span={12} >
                        <div className="footer-left-text">合作电话：400-150-9669</div>
                        <div className="footer-left-text">业务合作：marketing@oakblack.com</div>
                        <div className="footer-left-text">媒体合作：media@oakblack.com</div>
                        <div className="footer-left-text">联系地址：深圳南山区南山区粤兴三道2号产业化综合楼A601(科苑地铁站D出口)</div>
                    </Col>
                    <Col xxl={4} span={10}></Col>
                    <Col span={2} >
                        <ProtocolButton style={{ color: "#fff", paddingTop: "1em" }} index={0}></ProtocolButton>
                        <ProtocolButton style={{ color: "#fff", paddingTop: "1em" }} index={1}></ProtocolButton>
                    </Col>
                    <Col xxl={3}></Col>
                </Row>
                <div className="footer-bottom-text">
                    <a style={{ color: "#02A7F0" }} href="http://beian.miit.gov.cn/">粤ICP备18120172号-3</a>
                    &nbsp;Copyright © 2018 深圳市橡树黑卡网络科技有限公司
                </div>
            </Footer>
        );
    }
}

export {
    FooterArea
}
