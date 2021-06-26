import React from 'react';
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout, Button, Input, Form, notification, InputNumber, Select } from 'antd';
import { TopBar } from '../../components/header';
import { DataInputArea } from '../../components/dataInputArea';
import { withRouter } from 'react-router-dom'
// import './style.css'
import request from '../../../utils/request.js';
import { CodeInput } from '../../components/codeInput/index.js';



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
        const { product_name, product_detail, price, inventory, product_type_id } = values;
        params = {
            product_name: product_name,
            product_detail: product_detail,
            price: price,
            inventory: inventory,
            product_type_id: product_type_id
        }
        // 调用发布接口
        registerResponse = request('post', '/v1.0/products/create/', params);
        if (registerResponse.data.code === 0) {
            notification.success({
                duration: 3,
                message: "发布成功",
                placement: "bottomRight",
                description: "3秒后自动跳转至首页",
                onClose: this.linkToIndex.bind(this)
            })
        } else {
            notification.error({
                duration: 3,
                message: "发布失败",
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
                                    <Input.Password placeholder={inputItem.placeholder} />
                                );
                            } else if (inputItem.type === "search") {
                                return (
                                    <CodeInput placeholder={inputItem.placeholder} formKey={formKey} />
                                );
                            } else if (inputItem.type === "number") {
                                return (
                                    <InputNumber min={0} max={999999999999} defaultValue={0} />
                                );
                            } else if (inputItem.type === "textArea") {
                                return (
                                    <Input.TextArea placeholder={inputItem.placeholder} rows={8} showCount={true} maxLength={500}/>
                                );
                            } else {
                                return (
                                    <Input placeholder={inputItem.placeholder} />
                                );
                            }
                        }(this.props.formKey)}
                    </Form.Item>
                ))}
                
    
                <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                    <Button type="primary" htmlType="submit">
                        提交发布
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


export class ReportProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputList: [{
                label:  "产品名称：",
                placeholder: "请输入产品名称",
                name: "product_name",
                rules: [{ required: true, message: "请输入产品名称"}],
            },{
                label: "产品类型",
                placeholder: "请输入产品类型",
                name: "product_type",
                rules: [{ required: true, message: "请输入产品类型" }],
            },{
                label:  "价格：",
                placeholder: "请输入价格",
                name: "price",
                type: "number",
                rules: [{ required: true, message: "请输入价格"}],
            },{
                label: "库存",
                placeholder: "请输入库存",
                type: "number",
                name: "inventory",
                rules: [{ required: true, message: "请输入库存" }],
            },{
                label: "产品详情",
                placeholder: "请输入产品详情(限500字)",
                name: "product_detail",
                type: "textArea",
                rules: [{ required: true, message: "请输入产品详情", max: 500 }],
            }],
        }
    }

    componentDidMount() {
        // 调用产品类型接口

    }

    render() {

        const RouterInputNodeList = withRouter(InputNodeList);

        const MenuList = (
            <RouterInputNodeList 
                formKey="product_detail_report" 
                inputList={this.state.inputList} 
            />
        );

        return (
            <Layout>
                <TopBar></TopBar>
                    <DataInputArea
                        title="发布您的产品"
                        reactNodes={MenuList}
                    />
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}
