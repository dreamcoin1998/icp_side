import React from 'react';
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout, Button, Input, Form, notification,Menu } from 'antd';
import { TopBar } from '../../components/header';
import { DataInputArea } from '../../components/dataInputArea';
import { withRouter } from 'react-router-dom'
// import './style.css'
import request from '../../../utils/request.js';
import { CodeInput } from '../../components/codeInput/index.js';


const { Content } = Layout;


class InputNodeList extends React.Component {

    
    linkToIndex() {
        this.props.history.push("/");
    }

    linkToResetPasswd() {
        this.props.history.push("/user/find_password/")
    }

    handleFinish(values) {
        var params;
        var registerResponse;
        const { phone, password, email } = values;
        const url = this.props.formKey === "phone" ? "/v1.0/auth/login/phone/" : "/v1.0/auth/login/email/";
        if (this.props.formKey === "phone") {
            params = {
                phone: phone,
                password: password,
            }
            // 调用登录接口
        } else {
            params = {
                email: email,
                password: password,
            }
        }
        request("post", url, params).then(registerResponse  => {
            if (registerResponse.code === 0) {
                // 存储用户信息
                localStorage.setItem("userInfo", JSON.stringify(registerResponse.data))
                notification.success({
                    duration: 3,
                    message: "登录成功",
                    placement: "bottomRight",
                    description: "3秒后自动跳转至首页",
                    onClose: this.linkToIndex.bind(this)
                })
            } else {
                notification.error({
                    duration: 3,
                    message: "登录失败",
                    placement: "bottomRight",
                    description: "请信息填写和网络情况",
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
                                    <Input.Password placeholder={inputItem.placeholder} />
                                );
                            } else if (inputItem.type === "search") {
                                return (
                                    <CodeInput placeholder={inputItem.placeholder} formKey={formKey} />
                                );
                            } else {
                                return (
                                    <Input placeholder={inputItem.placeholder} />
                                );
                            }
                        }(this.props.formKey)}
                    </Form.Item>
                ))}
                <Form.Item 
                    // name="agreement"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                    rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('同意方可注册使用')),
                        },
                    ]}
                >
                    <Button onClick={this.linkToResetPasswd.bind(this)}>忘记密码了？找回密码</Button>
                </Form.Item>
    
                <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                    <Button type="primary" htmlType="submit">
                        提交登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputListPhone: [{
                label:  "手机号码：",
                placeholder: "请输入手机号码",
                name: "phone",
                rules: [{ required: true, message: "手机号码输入错误", len: 11}],
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
                rules: [{ required: true, message: "邮箱输入错误", pattern:  /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/}],
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
                        通过手机号登录
                        {/* <InputNodeList formKey="phone" inputList={this.state.inputListPhone} /> */}
                    </Menu.Item>
                    <Menu.Item key="email">
                        通过邮箱登录
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
                        title="用户登录"
                        reactNodes={MenuList}
                    />
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

export {
    Login
}
