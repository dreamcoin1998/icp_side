import React from 'react';
import { Link, BrowserRouter, withRouter } from 'react-router-dom';
import { Layout, Row, Col, Input, Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css'
import logo from '../../../public/logo.png'


const Header = Layout.Header;
const { Search } = Input;

function AvatarImage(props) {
    if (props.src) {
        return <Avatar size="large" src={props.src} />
    } else {
        return <Avatar size="large" icon={<UserOutlined />} />
    }
}

class UserModule extends React.Component {
    constructor(props) {
        super(props);
        // 临时参数
        this.state = {
            userinfo: null
        }
    }

    componentDidMount(){
        // 缓存中获取用户信息并设置this.state
        const userInfoJson = localStorage.getItem("userInfo");
        const userInfo = JSON.parse(userInfoJson);
        if (userInfoJson !== "{}") {
            this.setState({
                userInfo: userInfo
            });
        }
    }

    render() {
        if (this.state.userInfo) {
            return (
                <Link to="/produce/user?count=10&page=1">
                    <Space>
                        <AvatarImage src={this.state.userInfo.avatar}></AvatarImage>
                        {this.state.userInfo.username}
                    </Space>
                </Link>
            );
        } else {
            return (
                <Space>
                    <Button type="text">
                        <Link to="/user/login/">登录</Link>
                    </Button>
                    <Button type="text">
                        <Link to="/user/register/">注册</Link>
                    </Button>
                </Space>
            );
        }
    }
}

class SearchProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    handleSearch(value, event) {
        // 跳转到搜索页面
        if (value) {
            this.props.history.push("/product/search/?product_name=" + value + "&count=10&page=1")
            window.location.reload();
        }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <Search 
                onChange={this.handleChange.bind(this)}
                onSearch={this.handleSearch.bind(this)} 
                placeholder="搜索产品信息..." 
                enterButton={true} 
                size="large" 
            />
        );
    }
}

class TopBar extends React.Component {

    render() {
        const RouterSearchProduct = withRouter(SearchProduct);

        return(
            <Header className="header">
                <Row align="middle">
                    {/* logo */}
                    <Col xxl={3}></Col>
                    <Col span={4}>
                        <Link to="/">
                            <img style={{width: "123px"}} className="background-image" src={logo}></img>
                        </Link>
                    </Col>
                    <Col xxl={0} span={3}></Col>
                    {/* 搜索栏 */}
                    <Col className="search-shape-position" span={10}>
                        <RouterSearchProduct />
                    </Col>
                    <Col xxl={2} span={4}></Col>
                    {/* 用户登录注册交互 */}
                    <Col span={3}>
                        <UserModule></UserModule>
                    </Col>
                    <Col xxl={4}></Col>
                </Row>
            </Header>
        );
    }
}

export {
    TopBar
};