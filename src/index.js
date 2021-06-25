import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {IndexPage} from './containers/index/index';
import { ProductSearch } from './containers/productSearch';
import { MyReportProduct } from './containers/myReportProduct';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.less';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* 产品模块 */}
          {/* <Route path="/product/detail/:id"></Route> */}
          <Route path="/produce/user/" component={MyReportProduct}></Route>
          <Route exact path="/product/search/" component={ProductSearch}></Route>
          {/* <Route path="/product/report/"></Route> */}
          {/* 用户模块 */}
          {/* <Route path="/user/register/"></Route> */}
          {/* <Route path="/user/login/"></Route> */}
          {/* <Route path="/user/bind/"></Route> */}
          {/* <Route path="/user/find_password/"></Route> */}
          {/* <Route path="*"></Route> */}
          <Route exact path="(/)" component={IndexPage}></Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));