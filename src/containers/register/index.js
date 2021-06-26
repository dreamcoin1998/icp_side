import React from 'react';
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout, Row, Col, Button, Input, Form, Checkbox, notification,Menu } from 'antd';
import { TopBar } from '../../components/header';
import { DataInputArea } from '../../components/dataInputArea';
import { ProtocolButton } from '../../components/protocolButton/index.js';
import './style.css'
import { withRouter } from 'react-router-dom'
import request from '../../../utils/request.js';
import { CodeInput } from '../../components/codeInput/index.js';


const { Content } = Layout;


class InputNodeList extends React.Component {

    linkToIndex() {
        this.props.history.push("/user/login/");
    }

    handleFinish(values) {
        var params;
        console.log(values);
        if (this.props.formKey == "phone") {
            const { username, password, code, phone } = values;
            params = {
                username: username,
                password: password,
                phoneOrEmail: phone,
                code: code,
                type: "phone"
            }
        } else {
            const { username, password, code, email } = values;
            params = {
                username: username,
                password: password,
                phoneOrEmail: email,
                code: code,
                type: "phone"
            }
        }
        // 调用注册接口
        const registerResponse = request('post', '/v1.0/auth/register/', params);
        if (registerResponse.data.code === 0) {
            notification.success({
                duration: 3,
                message: "注册成功",
                placement: "bottomRight",
                description: "3秒后自动跳转至首页",
                onClose: this.linkToIndex.bind(this)
            })
        } else {
            notification.error({
                duration: 3,
                message: "注册失败",
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
                style={{margin: "1.5em auto", display: "table", width: "70%"}}
                onFinish={this.handleFinish.bind(this)}
                onFinishFailed={this.handleFinishFailed.bind(this)}
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
                <Form.Item 
                    name="agreement"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                    rules={[
                        {
                            validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('同意方可注册使用')),
                        },
                    ]}
                >
                    <Checkbox>
                        我已阅读并接受
                        <ProtocolButton style={{ color: "rgb(2, 167, 240)"}} index={0}></ProtocolButton>
                        和
                        <ProtocolButton style={{ color: "rgb(2, 167, 240)"}} index={1}></ProtocolButton>
                    </Checkbox>
                </Form.Item>
    
                <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                    <Button type="primary" htmlType="submit">
                        提交注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputListPhone: [{
                label: "用户名",
                placeholder: "请输入用户名",
                name: "username",
                rules: [{ required: true, message: '请输您的用户名' }],
            },{
                label: "用户介绍：",
                placeholder: "请输入用户相关介绍，限150字",
                name: "introduction",
                rules: [{ required: false, max: 150 }],
            },{
                label:  "手机号码：",
                placeholder: "请输入手机号码",
                name: "phone",
                rules: [{ required: true, message: "手机号码输入错误", len: 11}],
                type: "search"
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
                rules: [{ required: true, min: 8, message: "密码至少8位" }],
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
                label: "用户名",
                placeholder: "请输入用户名",
                name: "username",
                rules: [{ required: true, message: '请输您的用户名' }],
            },{
                label: "用户介绍：",
                placeholder: "请输入用户相关介绍，限150字",
                name: "introduction",
                rules: [{ required: false, max: 150 }],
            },{
                label:  "邮箱：",
                placeholder: "请输入邮箱",
                name: "email",
                rules: [{ required: true, message: "邮箱输入错误", pattern:  /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/}],
                type: "search"
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
                rules: [{ required: true, min: 8, message: "密码至少8位" }],
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
                        通过手机号注册
                        {/* <InputNodeList formKey="phone" inputList={this.state.inputListPhone} /> */}
                    </Menu.Item>
                    <Menu.Item key="email">
                        通过邮箱注册
                        {/* <InputNodeList formKey="email" inputList={this.state.inputListEmail} /> */}
                    </Menu.Item>
                </Menu>
                <RouterInputNodeList 
                    formKey={this.state.menuKey} 
                    inputList={this.state.menuKey === "phone" ? this.state.inputListPhone : this.state.inputListEmail} 
                />
            </>
            

        );

        return (
            <Layout>
                <TopBar></TopBar>
                    <DataInputArea
                        title="用户注册"
                        reactNodes={MenuList}
                    />
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

export {
    Register
}
