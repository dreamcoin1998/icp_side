import React from "react"
import { Layout, Row, Col, Button, PageHeader, Input } from 'antd'
import './style.css'


const { Content } = Layout;


class DataInputArea extends React.Component {

    render() {

        return (
            <Content className="content-class">
                <Row className="pageHeader-class">
                    <PageHeader
                        className="text-class"
                        title={this.props.title}
                    />
                </Row>
                <Row className="pageHeader-class" style={{display: "block", margin: "auto"}}>
                    {this.props.reactNodes}
                </Row>
            </Content>
        );
    }
}


export {
    DataInputArea
}
