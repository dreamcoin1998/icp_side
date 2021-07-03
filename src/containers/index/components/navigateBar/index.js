import React from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';


const { SubMenu, Item } = Menu;

class NavigateBar extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        // 产品类型的Item列表数组
        const ProductTypeItem = this.props.productTypes.map((productType) => (
            <Item key={String(productType.id)}>{productType.type_name}</Item>
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
