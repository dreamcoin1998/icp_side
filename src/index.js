import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router'
import {IndexPage} from './containers/index/index';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.less';


class App extends React.Component {
  render() {
    return (
      <>
        <IndexPage />
        {/* <Router> */}
          {/* <Route exact path="/"></Route> */}
          {/* 产品模块 */}
          {/* <Route path="/product/detail/:id"></Route> */}
          {/* <Route path="/product/report/"></Route> */}
          {/* <Route path="/product/search/?product_name=(&count=&page=)"></Route> */}
          {/* <Route path="/product/type/:id"></Route> */}
          {/* <Route path="/produce/user/"></Route> */}
          {/* 用户模块 */}
          {/* <Route path="/user/register/"></Route> */}
          {/* <Route path="/user/login/"></Route> */}
          {/* <Route path="/user/bind/"></Route> */}
          {/* <Route path="/user/find_password/"></Route> */}
          {/* <Route path="*"></Route> */}
        {/* </Router> */}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));