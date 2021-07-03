import React from 'react'
import { ProductShowList } from '../../components/productShowList/index.js'
import { FooterArea } from '../../components/footerArea/index.js';
import { Layout, notification } from 'antd';
import { TopBar } from '../../components/header';


class MyReportProduct extends React.Component {

    linkToLoginPage() {
        this.props.history.push("/user/login/");
    }

    componentDidMount() {
        // 如果用户未登录
        const userInfo = localStorage.getItem("userInfo");
        const token = localStorage.getItem("token");
        if (!userInfo || !token) {
            notification.error({
                duration: 3,
                message: "当前未登录或登录已过期",
                placement: "topRight",
                description: "3秒后自动跳转至登录页",
                onClose: this.linkToLoginPage.bind(this)
            })
        }
    }

    render() {
        const queryString = this.props.location.search;
        const myReportProductApi = "/v1.0/product/user";

        return (
            <Layout>
                <TopBar></TopBar>
                <ProductShowList
                    title="我发布的产品信息"
                    apiUrl={myReportProductApi}
                    queryString={queryString}
                    isPage={true}
                    isShowTotal={true}
                />
                <FooterArea></FooterArea>
            </Layout>
        );
    }
}

export {
    MyReportProduct
}