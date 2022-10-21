import React, {FC, Suspense, useEffect, useState} from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import {Spin, Space, ConfigProvider} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './App.moule.less';
import { Provider } from 'mobx-react';
import { store, StoreContext } from '/@/stores';
import Login from './pages/Login';
import Home from './pages/Home';
import "./theme/custom-default.css";    // 引入custom-default.css 以及 custom-dark.css
import "./theme/custom-dark.css";
import CommonLoading from "@/components/CommonLoading";

const antIcon = <CommonLoading/>;

const App: FC = () => {
  const [prefix, setPrefix] = useState("custom-default");
  const [loading, setLoading] = useState(true);
  const handlePrefixChange = (e: any) => {
    setPrefix(e.target.value);
  };
  useEffect(() => {
  }, [])
  return (

      <Provider {...store} className="App">
        <StoreContext.Provider value={store}>
          <ConfigProvider prefixCls={prefix}>
          <Router>
            <Suspense
              fallback={
                <Space size="large" className="loading flex-all-center">
                  <Spin indicator={antIcon} size="large" tip="加载中" />
               </Space>
              }
            >
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} />
              </Switch>
            </Suspense>
          </Router>
          </ConfigProvider>
        </StoreContext.Provider>
      </Provider>

  );
};

export default App;
