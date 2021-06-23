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
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            this.setState({
                userInfo: userInfo
            });
        }
    }

    render() {
        if (this.state.userinfo) {
            return (
                <BrowserRouter>
                    <Link to="/produce/user/">
                        <Space>
                            <AvatarImage src={this.state.userinfo.avatarUrl}></AvatarImage>
                            {this.state.userinfo.username}
                        </Space>
                    </Link>
                </BrowserRouter>
            );
        } else {
            return (
                <Space>
                    <Button type="text">
                        <BrowserRouter>
                            <Link to="/user/login/">登录</Link>
                        </BrowserRouter>
                    </Button>
                    <Button type="text">
                        <BrowserRouter>
                            <Link to="/user/register/">注册</Link>
                        </BrowserRouter>
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
                    <Col span={4}>
                        <BrowserRouter>
                            <Link to="/">
                                <img className="background-image" src={logo}></img>
                            </Link>
                        </BrowserRouter>
                    </Col>
                    {/* 搜索栏 */}
                    <Col className="search-shape-position" span={10} offset={3}>
                        <BrowserRouter>
                            <RouterSearchProduct />
                        </BrowserRouter>
                    </Col>
                    {/* 用户登录注册交互 */}
                    <Col span={4} offset={3}>
                        <UserModule></UserModule>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export {
    TopBar
};