import React from 'react';
import { Input } from 'antd';
import request from '../../../utils/request';


/**
 * 输入框点击接收验证码组件
 */
export class CodeInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            enterButtonText: "获取验证码",
            time: 60,
            interval: null
        }
    }

    requestCode(value) {
        if (this.props.formKey === "phone") {
            const params = {
                phone: value
            }
            request("post", "/v1.0/auth/verification_request/phone", params)
        } else {
            const params = {
                email: value
            }
            request("post", "/v1.0/auth/verification_request/email", params)
        }
    }

    changeButtonText() {
        if (this.state.time === 0) {
            clearInterval(this.state.interval)
            this.setState({
                enterButtonText: "获取验证码",
                time: 60,
                interval: null
            })
        } else {
            const currentTime = this.state.time;
            this.setState({
                enterButtonText: currentTime + "秒后重新获取",
                time: currentTime - 1
            })
        }
    }

    /**
     * 点击事件
     * 1. 判断输入框值是否符合规范
     * 2. 符合规范调取发送验证码接口
     * @param {string} value 
     * @param {*} _ 
     */
    handleClick(value, _) {
        var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        if (value.length === 11 && this.state.time === 60) {
            this.setState({
                interval: setInterval(this.changeButtonText.bind(this), 1000)
            })
            this.requestCode.bind(this, value)()
        } else if (reg.test(value)){
            this.setState({
                interval: setInterval(this.changeButtonText.bind(this), 1000)
            })
            this.requestCode.bind(this, value)()
        }
    }

    render() {

        return (
            <Input.Search enterButton={this.state.enterButtonText} onSearch={this.handleClick.bind(this)} />
        );
    }
}
