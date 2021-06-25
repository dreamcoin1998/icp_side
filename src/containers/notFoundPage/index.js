import React from 'react';
import notFoundImage from '../../../public/notFoundImage.png'
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout, Row, Col, Button } from 'antd';
import { TopBar } from '../../components/header';
import './style.css'



class NotFoundPage extends React.Component {

    render() {
        return (
            <Layout>
                <TopBar></TopBar>
                    <Row className="row-class">
                        <Col offset={4} span={4}>
                            <img src={notFoundImage} style={{ width: "25em" }} />
                        </Col>
                        <Col span={3}></Col>
                        <Col offset={4}>
                            <div className="div-404-class">404</div>
                            <div className="div-sorry-class">抱歉，您访问的页面不存在</div>
                            <Button className="button-class" type="primary" onClick={() => this.props.history.push("/")}>返回首页</Button>
                        </Col>
                    </Row>
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

export {
    NotFoundPage
};
