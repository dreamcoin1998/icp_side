import React from 'react';
import { Link, BrowserRouter, withRouter } from 'react-router-dom';
import { Layout, Row, Col, Input, Avatar, Space, Button, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.css'
import logo from '../../../public/logo.png'
import request from '../../../utils/request';


const Header = Layout.Header;
const { Search } = Input;

function AvatarImage(props) {
    if (props.src) {
        return <Avatar size="large" src={props.src} />
    } else {
        return <Avatar size="large" icon={<UserOutlined />} />
    }
}


class UserAvatar extends React.Component {

    state = {
        visible: false,
    };

    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };
    
    render() {

        const menu = (
            <Menu>
                <Menu.Item key="my_product">
                    <Link to="/produce/user?count=10&page=1">
                        我发布的产品
                    </Link>
                </Menu.Item>
                <Menu.Item key="report_product">
                    <Link to="/product/report/">
                        发布产品
                    </Link>
                </Menu.Item>
            </Menu>
        );

        return (
            <Dropdown 
                overlay={menu}
                onVisibleChange={this.handleVisibleChange}
                visible={this.state.visible}
            >
                <Space onClick={e => e.preventDefault()}>
                    <AvatarImage src={this.props.userInfo.avatar}></AvatarImage>
                    {this.props.userInfo.username}
                </Space>
            </Dropdown>
        );
    }
}


class UserModule extends React.Component {
    constructor(props) {
        super(props);
        // 临时参数
        this.state = {
            userInfo: null
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
                <>
                    {<UserAvatar userInfo={this.state.userInfo} />}
                </>
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

    detectProductName(productName) {
        
        return new Promise((resolve, reject) => {
            request("post", "/v1.0/detect/sensitives/", {text: productName}).then(response => {
                console.log(response.data);
                if (response.code === 0) {
                    const prodectedProductName = response.data.filted_text
                    resolve(prodectedProductName);
                }
            })
        })
    }

    handleSearch(value, event) {
        // 跳转到搜索页面
        if (value) {
            console.log(value)
            this.detectProductName(value).then(prodectedProductName => {
                this.props.history.push("/product/search/?product_name=" + prodectedProductName + "&count=10&page=1")
                window.location.reload();
            })
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
                    <Col xxl={2} span={2}></Col>
                    <Col xxl={2} span={2}>
                        <Button type="text">
                            <Link to="/product/report/">免费发布</Link>
                        </Button>
                    </Col>
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