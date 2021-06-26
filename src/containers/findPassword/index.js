import React from 'react';
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout, Row, Col, Button, Input, Form, Checkbox, notification,Menu } from 'antd';
import { TopBar } from '../../components/header';
import { DataInputArea } from '../../components/dataInputArea';
// import './style.css'
import request from '../../../utils/request.js';
import { withRouter } from 'react-router-dom'
import { CodeInput } from '../../components/codeInput/index.js';


const { Content } = Layout;


class InputNodeList extends React.Component {

    
    linkLoginPage() {
        this.props.history.push("/user/login/");
    }

    handleFinish(values) {
        var params;
        var registerResponse;
        if (this.props.formKey === "phone") {
            const { phone, password, code } = values;
            params = {
                phone: phone,
                password: password,
                code,
            }
            // 调用登录接口
            registerResponse = request('post', '/v1.0/auth/change_passswd_phone', params);
        } else {
            const { email, password, code } = values;
            params = {
                email: email,
                password: password,
                code,
            }
            registerResponse = request('post', '/v1.0/auth/change_passswd_email', params);
        }
        if (registerResponse.data.code === 0) {
            notification.success({
                duration: 3,
                message: "更改密码成功",
                placement: "bottomRight",
                description: "3秒后自动跳转至登录页",
                onClose: this.linkLoginPage.bind(this)
            })
        } else {
            notification.error({
                duration: 3,
                message: "登录失败",
                placement: "bottomRight",
                description: "请信息填写和网络情况",
            })
        }
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
                        提交重置
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


class FindPassword extends React.Component {

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
                label: "密码",
                placeholder: "请输入密码",
                name: "password",
                type: "password",
                rules: [{ required: true, message: "请输入密码" }],
            },{
                label: "确认密码",
                placeholder: "再输入一遍密码",
                name: "confirmPassword",
                type: "password",
                dependencies: ["password"],
                rules: [{ 
                    required: true, 
                    min: 8,
                    message: "密码至少8位"
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                        }
                        return Promise.reject(new Error('两次输入不一样！'));
                    },
                })
                ],
            }],
            inputListEmail: [{
                label:  "邮箱：",
                placeholder: "请输入邮箱",
                name: "email",
                type: "search",
                rules: [{ required: true, message: "邮箱输入错误", pattern:  /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/}],
            },{
                label: "密码",
                placeholder: "请输入密码",
                name: "password",
                type: "password",
                rules: [{ required: true, message: "请输入密码" }],
            },{
                label: "确认密码",
                placeholder: "再输入一遍密码",
                name: "confirmPassword",
                type: "password",
                dependencies: ["password"],
                rules: [{ 
                    required: true, 
                    min: 8,
                    message: "密码至少8位"
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                        }
                        return Promise.reject(new Error('两次输入不一样！'));
                    },
                })
                ],
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
                        通过手机号重置
                        {/* <InputNodeList formKey="phone" inputList={this.state.inputListPhone} /> */}
                    </Menu.Item>
                    <Menu.Item key="email">
                        通过邮箱重置
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
                        title="重置密码"
                        reactNodes={MenuList}
                    />
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

export {
    FindPassword
}
