import React from 'react';
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout, Row, Col, Button, Input, Form, Checkbox, notification,Menu } from 'antd';
import { TopBar } from '../../components/header';
import { DataInputArea } from '../../components/dataInputArea';
import { ProtocolButton } from '../../components/protocolButton/index.js';
// import './style.css'
import request from '../../../utils/request.js';
import { withRouter } from 'react-router-dom'
import { CodeInput } from '../../components/codeInput/index.js';


const { Content } = Layout;


class InputNodeList extends React.Component {

    
    linkToIndex() {
        this.props.history.push("/");
    }

    handleFinish(values) {
        var params;
        const apiUrl = '/v1.0/auth/verification/' + this.props.formKey + "/";
        const { phone, password, code, email } = values;
        params = {
            code: code,
            password: password
        };
        if (this.props.formKey === "phone") {
            params.phone = phone;
            // 调用登录接口
        } else {
            params.email = email;
        }
        request("post", apiUrl, params).then(response => {
            if (response.code !== 0) {
                notification.error({
                    duration: 3,
                    message: "绑定失败",
                    placement: "bottomRight",
                    description: "请信息填写和网络情况"
                })
            } else {
                notification.success({
                    duration: 3,
                    message: "绑定成功",
                    placement: "bottomRight",
                    description: "3秒后自动跳转至首页",
                    onClose: this.linkToIndex.bind(this)
                })
            }
        })
    }

    handleFinishFailed(data) {
        console.log("未通过", data);
    }

    render() {
        return (
            <Form
                name={this.props.formKey}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={this.handleFinish.bind(this)}
                onFinishFailed={this.handleFinishFailed.bind(this)}
                style={{margin: "1.5em auto", display: "table", width: "70%"}}
            >
                {this.props.inputList.map((inputItem) => (
                    <Form.Item
                        label={inputItem.label}
                        name={inputItem.name}
                        rules={inputItem.rules}
                        dependencies={inputItem.dependencies || []}
                    >
                        { function(formKey) {
                            if (inputItem.type === "password") {
                                return (
                                    <Input.Password />
                                );
                            } else if (inputItem.type === "search") {
                                return (
                                    <CodeInput formKey={formKey} />
                                );
                            } else {
                                return (
                                    <Input />
                                );
                            }
                        }(this.props.formKey)}
                    </Form.Item>
                ))}
    
                <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                    <Button type="primary" htmlType="submit">
                        提交绑定
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


class BindContactDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputListPhone: [{
                label:  "手机号码：",
                placeholder: "请输入手机号码",
                name: "phone",
                type: "search",
                rules: [{ required: true, message: "手机号码输入错误", len: 11}],
            },{
                label: "验证码",
                placeholder: "请输入验证码",
                name: "code",
                rules: [{ required: true, message: "请输入验证码" }],
            },{
                label: "密码",
                placeholder: "请输入密码",
                name: "password",
                type: "password",
                rules: [{ required: true, message: "请输入密码" }],
            }],
            inputListEmail: [{
                label:  "邮箱：",
                placeholder: "请输入邮箱",
                name: "email",
                type: "search",
                rules: [{ required: true, message: "邮箱输入错误", pattern:  /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/}],
            },{
                label: "验证码",
                placeholder: "请输入验证码",
                name: "code",
                rules: [{ required: true, message: "请输入验证码" }],
            },{
                label: "密码",
                placeholder: "请输入密码",
                name: "password",
                type: "password",
                rules: [{ required: true, message: "请输入密码" }],
            }],
            menuKey: "phone"
        }
    }

    handleClick(e) {
        this.setState({
            menuKey: e.key
        })
    }

    render() {

        const RouterInputNodeList = withRouter(InputNodeList);

        const MenuList = (
            <>
                <Menu 
                    selectedKeys={[this.state.menuKey]} 
                    mode="horizontal" onClick={this.handleClick.bind(this)} 
                    style={{  margin: "0 auto", marginBottom: "1.5em", display: "table" }}
                >
                    <Menu.Item key="phone">
                        绑定手机号
                        {/* <InputNodeList formKey="phone" inputList={this.state.inputListPhone} /> */}
                    </Menu.Item>
                    <Menu.Item key="email">
                        绑定邮箱
                        {/* <InputNodeList formKey="email" inputList={this.state.inputListEmail} /> */}
                    </Menu.Item>
                </Menu>
                <RouterInputNodeList formKey={this.state.menuKey} inputList={this.state.menuKey === "phone" ? this.state.inputListPhone : this.state.inputListEmail} />
            </>
            

        );

        return (
            <Layout>
                <TopBar></TopBar>
                    <DataInputArea
                        title="用户绑定"
                        reactNodes={MenuList}
                    />
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

export {
    BindContactDetail
}
