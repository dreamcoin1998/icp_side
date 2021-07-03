import React from 'react';
import { Input, notification } from 'antd';
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
        // 邮箱格式
        var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        if (reg.test(value) || value.length === 11 && this.state.time === 60) {
            const url = "/v1.0/auth/verification_request/" + this.props.formKey + "/";
            const params = this.props.formKey === "phone" ? {phone: value} : {email: value};
            request("post", url, params).then(response => {
                if (response.code !== 0) {
                    notification.error({
                        duration: 3,
                        message: "请求验证码失败",
                        placement: "bottomRight",
                        description: response.msg,
                    })
                } else {
                    this.setState({
                        interval: setInterval(this.changeButtonText.bind(this), 1000)
                    })
                }
            })
        }
    }

    render() {
        const { onChange, value } = this.props;
        const { getFieldProps, name } = this.props;
        return (
            <Input.Search 
                placeholder={this.props.placeholder} 
                enterButton={this.state.enterButtonText} 
                onSearch={this.handleClick.bind(this)} 
                onChange={(e)=>onChange(e.target.value)}
                value={value}
            />
        );
    }
}
