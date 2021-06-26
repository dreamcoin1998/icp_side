import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {IndexPage} from './containers/index/index';
import { ProductSearch } from './containers/productSearch';
import { MyReportProduct } from './containers/myReportProduct';
import { NotFoundPage } from './containers/notFoundPage';
import { Register } from './containers/register';
import { Login } from './containers/login';
import { BindContactDetail } from './containers/bindContactDetail';
import { FindPassword } from './containers/findPassword';
import { ReportProduct } from './containers/reportProduct'; 
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.less';


class App extends React.Component {
  
  render() {

    const RedirectAs404 = ({ location }) => <Redirect to='/404/' />

    return (
      <Router>
        <Switch>
          {/* 产品模块 */}
          {/* <Route path="/product/detail/:id"></Route> */}
          <Route path="/produce/user/" component={MyReportProduct}></Route>
          <Route exact path="/product/search/" component={ProductSearch}></Route>
          <Route path="/product/report/" component={ReportProduct}></Route>
          {/* 用户模块 */}
          <Route path="/user/register/" component={Register}></Route>
          <Route path="/user/login/" component={Login}></Route>
          <Route path="/user/bind/" component={BindContactDetail}></Route>
          <Route path="/user/find_password/" component={FindPassword}></Route>
          <Route exact path="/404/" component={NotFoundPage}></Route>
          <Route exact path="(/)" component={IndexPage}></Route>
          <Route component={RedirectAs404}></Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));