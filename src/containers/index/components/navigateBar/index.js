import React from 'react';
import { Link, BrowserRouter, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


const { SubMenu, Item } = Menu;

class NavigateBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            productTypes: [{
                id: 1,
                typeName: "高端权益"
            },{
                id: 2,
                typeName: "视听娱乐"
            },{
                id: 3,
                typeName: "美食餐饮"
            },{
                id: 4,
                typeName: "生活服务"
            },{
                id: 5,
                typeName: "旅游出行"
            },{
                id: 6,
                typeName: "高端权益"
            },{
                id: 7,
                typeName: "医护健康"
            },{
                id: 8,
                typeName: "高端权益"
            },]
        }
    }

    render() {
        // 产品类型的Item列表数组
        const ProductTypeItem = this.props.productTypes.map((productType) => (
            <Item key={String(productType.id)}>{productType.typeName}</Item>
        ))

        return (
            <Menu 
              mode="inline" 
              defaultOpenKeys={["productTypes"]} 
              defaultSelectedKeys={["productTypes"]}
              onSelect={this.props.handleSelect}
            >
                <SubMenu 
                  icon={ <MenuOutlined /> } 
                  title="全部产品分类" 
                  key="productTypes"
                  children={ProductTypeItem}
                >
                </SubMenu>
            </Menu>
        );
    }

}


export {
    NavigateBar
};
